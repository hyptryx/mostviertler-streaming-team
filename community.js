/* ==========================================
   COMMUNITY PAGE
   Mostviertler Streaming Team
========================================== */


/* ------------------------------------------
   Firebase Config

   HIER später einfach deine bestehende
   Firebase Config aus script.js einfügen.
------------------------------------------ */



// const firebaseConfig = {
// ...
// };


// firebase.initializeApp(firebaseConfig);

// const db = firebase.database();



/* ==========================================
   AKTUELLES COMMUNITY PROJEKT
========================================== */

const communityGoal = {

    title: "Ausbau MostiRadio",

    description:
    "Gemeinsam möchten wir unser MostiRadio weiter ausbauen. Neue Funktionen, bessere Audioqualität und viele neue Ideen.",

    current:684,

    goal:1000

};


/* ==========================================
   COMMUNITY ZIEL
========================================== */

function updateCommunityGoal(){

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

    updateCommunityGoal();

    // Support-Karten
    document.querySelectorAll(".support-btn").forEach(button => {

        button.addEventListener("click", openSupportPopup);

    });

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

    document.getElementById("supportPopup").style.display = "flex";

    document.getElementById("paypalButton").href =
        paypalLinks[selectedAmount];

}

function closeSupportPopup(){

    document.getElementById("supportPopup").style.display = "none";

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
