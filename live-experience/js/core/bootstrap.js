import "../mr-config.js";

import { onUserChanged, getUserProfile } from "../auth.js";

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

onUserChanged(async (user) => {

    console.log("Auth geändert:", user?.displayName ?? "nicht angemeldet");

    if (!user) {
        return;
    }

   const profile = await getUserProfile(user.uid);

console.log("Profil:", profile);

if (!profile.chatName) {
    console.log("➡️ ChatName fehlt");
} else {
    console.log("➡️ ChatName:", profile.chatName);
}

});