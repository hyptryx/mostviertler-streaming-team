/* ==========================================
   COMMUNITY PAGE
   Mostviertler Streaming Team
========================================== */


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


/* ==========================================
   AKTUELLES COMMUNITY PROJEKT
========================================== */

let communityGoal = {};

/* ==========================================
   FIREBASE COMMUNITY
========================================== */

function loadCommunityGoal(){

    db.ref("community").on("value", (snapshot)=>{

        communityGoal = snapshot.val();

        if(!communityGoal) return;

        updateCommunityGoal();

    });

}


/* ==========================================
   COMMUNITY ZIEL
========================================== */

function updateCommunityGoal(){

    if(
        !communityGoal ||
        communityGoal.current == null ||
        communityGoal.goal == null
    ){
        return;
    }

    document.getElementById("goal-title").innerHTML =
    communityGoal.title;

    document.querySelector(".goal-description").innerHTML =
    communityGoal.description;

    document.getElementById("currentValue").innerHTML =
    communityGoal.current.toLocaleString("de-DE")+" €";

    document.getElementById("goalValue").innerHTML =
    communityGoal.goal.toLocaleString("de-DE")+" €";

    const percent =
    Math.min(

        Math.round(
            communityGoal.current /
            communityGoal.goal *100
        ),

        100

    );

    animateProgress(percent);

}


/* ==========================================
   PROGRESS BAR
========================================== */

function animateProgress(percent){

    const bar =
    document.getElementById("progressFill");

    const text =
    document.getElementById("goalPercent");



    bar.style.width="0%";

    text.innerHTML="0 %";



    let current=0;



    const animation =
    setInterval(()=>{

        current++;

        bar.style.width=current+"%";

        text.innerHTML=current+" %";



        if(current>=percent){

            clearInterval(animation);

        }

    },18);

}

/* ==========================================
   INITIALISIERUNG
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadCommunityGoal();

    // Support-Karten
    document.querySelectorAll(".support-btn").forEach(button => {

        button.addEventListener("click", openSupportPopup);

    });

   document
    .querySelector(".community-main-button")
    .addEventListener("click", openSupportPopup);

    // Popup schließen
    document
        .getElementById("closeSupportPopup")
        .addEventListener("click", closeSupportPopup);

    // Betragsauswahl
    document.querySelectorAll(".popupAmount").forEach(button => {

        button.addEventListener("click", selectAmount);

    });

});

/* ==========================================
   SUPPORT POPUP
========================================== */

let selectedAmount = "5";

const paypalLinks = {

    "5":"https://paypal.me/haraldgoebl/5",

    "10":"https://paypal.me/haraldgoebl/10",

    "20":"https://paypal.me/haraldgoebl/20",

    "custom":"https://paypal.me/haraldgoebl"

};

function openSupportPopup(){

    // Popup anzeigen
    document
.getElementById("supportPopup")
.classList.add("show");

    // Standardmäßig 5 € auswählen
    selectedAmount = "5";

    document.querySelectorAll(".popupAmount").forEach(button => {
        button.classList.remove("active");
    });

    document
        .querySelector('.popupAmount[data-amount="5"]')
        .classList.add("active");

    document.getElementById("paypalButton").href =
        paypalLinks[selectedAmount];

}

function closeSupportPopup(){

    document
.getElementById("supportPopup")
.classList.remove("show");

    selectedAmount = "5";

    document.querySelectorAll(".popupAmount").forEach(button => {
        button.classList.remove("active");
    });

    document
        .querySelector('.popupAmount[data-amount="5"]')
        .classList.add("active");

    document.getElementById("paypalButton").href =
        paypalLinks["5"];

}

function selectAmount(event){

    document.querySelectorAll(".popupAmount").forEach(button=>{

        button.classList.remove("active");

    });

    event.currentTarget.classList.add("active");

    selectedAmount = event.currentTarget.dataset.amount;

    document.getElementById("paypalButton").href =
        paypalLinks[selectedAmount];

}

window.addEventListener("click", (event) => {

    const popup = document.getElementById("supportPopup");

    if (event.target === popup) {

        closeSupportPopup();

    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        closeSupportPopup();

    }

});
