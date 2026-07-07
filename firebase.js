/* ==========================================
   FIREBASE
========================================== */

const firebaseConfig = {
    apiKey: "AIzaSyAhdTxRsm0qNUTw-iN8AHJI5ZYSA2m9oII",
    authDomain: "mosti-catch.firebaseapp.com",
    databaseURL: "https://mosti-catch-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mosti-catch",
    storageBucket: "mosti-catch.appspot.com",
    messagingSenderId: "100463668785",
    appId: "1:100463668785:web:3e4bb19ea88a99905d6f10"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
