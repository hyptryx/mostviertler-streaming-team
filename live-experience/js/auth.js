import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp
} from "firebase/firestore";

import { auth, db } from "./service/firebase.js";

const provider = new GoogleAuthProvider();

export async function login() {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
        await setDoc(userRef, {
            displayName: user.displayName,
            chatName: "",
            email: user.email,
            photoURL: user.photoURL,
            balance: 0,
            lifetimeCoins: 0,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
    }

    return user;
}

export async function logout() {
    await signOut(auth);
}

export async function getUserProfile(uid) {

    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
        return null;
    }

    return snapshot.data();

}

export async function updateChatName(uid, chatName) {

    const userRef = doc(db, "users", uid);

    await updateDoc(userRef, {
        chatName,
        updatedAt: serverTimestamp()
    });

    return {
        chatName
    };

}

export function onUserChanged(callback) {

    return onAuthStateChanged(auth, (user) => {

        const userContent = document.getElementById("user-content");

        if (userContent) {

            if (user) {
                userContent.innerHTML = `
                    <div>
                        👋 ${user.displayName}
                    </div>
                `;
            } else {
                userContent.innerHTML = `
                    <button id="btnLogin">
                        🔐 Mit Google anmelden
                    </button>
                `;

                document
                    .getElementById("btnLogin")
                    ?.addEventListener("click", login);
            }

        }

        callback(user);

    });

}