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

export function onUserChanged(callback) {
    return onAuthStateChanged(auth, callback);
}

// ===== Nur zum Testen =====
window.testLogin = login;