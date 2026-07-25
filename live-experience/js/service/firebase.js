import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";

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