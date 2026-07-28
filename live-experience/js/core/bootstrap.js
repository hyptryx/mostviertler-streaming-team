import "../mr-config.js";

import {
    onUserChanged,
    getUserProfile,
    updateChatName
} from "../auth.js";

import { startLiveListener } from "../service/firebase.js";

import { renderWallet } from "../components/wallet.js";

import "./mr-sound.js";
import "./mr-camera.js";
import "./mr-queue.js";

import "../alerts/mr-alert-engine.js";

import "../scenes/beer.js";
import "../scenes/firework.js";
import "../scenes/apple.js";
import "../scenes/heart.js";
import "../scenes/atomic-drop.js";
import "../scenes/legend.js";

import "./mr-init.js";

startLiveListener();

onUserChanged(async (user) => {

    console.log("Auth geändert:", user?.displayName ?? "nicht angemeldet");

    if (!user) {

    document.getElementById("wallet-container").innerHTML = "";

    return;

}

   const profile = await getUserProfile(user.uid);

console.log("Profil:", profile);

if (!profile.chatName) {

    document
        .getElementById("chatNamePopup")
        .classList.add("show");
        const saveButton = document.getElementById("saveChatName");
        const usernameInput = document.getElementById("chatUsername");

        saveButton.onclick = async () => {

         const chatName = usernameInput.value.trim();

    if (chatName.length < 3) {

        alert("Bitte mindestens 3 Zeichen eingeben.");

        return;

    }

    await updateChatName(user.uid, chatName);

    document
        .getElementById("chatNamePopup")
        .classList.remove("show");

    console.log("✅ ChatName gespeichert:", chatName);

};

} else {

    renderWallet(profile);

}

});

export async function refreshWallet(uid) {

    const profile = await getUserProfile(uid);

    renderWallet(profile);

}