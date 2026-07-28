import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
import { playProduct } from "./player.js";

const firebaseConfig = {
    apiKey: "AIzaSyBymntqf8MXD17I5QuXrTuyGjhsxEIjF8k",
    authDomain: "mostiradio-live.firebaseapp.com",
    projectId: "mostiradio-live",
    storageBucket: "mostiradio-live.firebasestorage.app",
    messagingSenderId: "1086618558420",
    appId: "1:1086618558420:web:9a664abff6b8901cb1c041"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app, "europe-west3");
export const auth = getAuth(app);

export default app;

const liveQuery = query(
  collection(db, "interactionQueue"),
  orderBy("createdAt", "desc"),
  limit(1)
);

let initialized = false;
let listenerStarted = false;

export function startLiveListener() {

  if (listenerStarted) return;
  listenerStarted = true;

  onSnapshot(liveQuery, (snapshot) => {

    if (!initialized) {
      initialized = true;
      return;
    }

    snapshot.docChanges().forEach((change) => {

      if (change.type !== "added") return;

      const interaction = change.doc.data();

      console.log("📡 Neue Live-Interaktion:", interaction);

      playProduct(
        interaction.animation,
        interaction.user
      );

    });

  });

}