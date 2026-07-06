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
   INITIALISIERUNG
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    updateCommunityGoal();

});



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
   PAYPAL
========================================== */

const paypalLink = "https://paypal.me/haraldgoebl";

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".support-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            openSupportPopup();

        });

    });

});

/* ==========================================
   SUPPORT POPUP
========================================== */

function openSupportPopup(){

    document.getElementById("supportPopup").style.display="flex";

    document.getElementById("paypalButton").href=paypalLink;

}

document
.getElementById("closeSupportPopup")
.addEventListener("click",()=>{

    document.getElementById("supportPopup").style.display="none";

});
