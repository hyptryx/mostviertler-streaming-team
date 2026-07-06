/* ==========================================
   COMMUNITY EFFECTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    if(params.get("success") === "true"){

        startCommunityAnimation();

    }

});

function createOverlay(){

    const overlay = document.createElement("div");

    overlay.id = "communityOverlay";

    overlay.innerHTML = `

        <div class="communityAnimation">

            <div id="mainHeart">

                ❤️

            </div>

            <h2>

                Danke für deine Unterstützung!

            </h2>

            <p>

                Gemeinsam machen wir das
                Mostviertler Streaming Team
                jeden Tag ein Stück besser.

            </p>

        </div>

    `;

    document.body.appendChild(overlay);

}

function startCommunityAnimation(){

    createOverlay();

    createHearts();

    createParticles();

    startConfetti();

    setTimeout(()=>{

        document.getElementById("communityOverlay").remove();

    },8000);

}

function createHearts(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="flyingHeart";

            heart.innerHTML="❤️";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(20+Math.random()*30)+"px";

            heart.style.animationDuration=

            (3+Math.random()*2)+"s";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },6000);

        },i*35);

    }

}

function createParticles(){

    for(let i=0;i<150;i++){

        setTimeout(()=>{

            const particle=document.createElement("div");

            particle.className="goldParticle";

            particle.style.left=Math.random()*100+"vw";

            particle.style.top=Math.random()*100+"vh";

            document.body.appendChild(particle);

            setTimeout(()=>{

                particle.remove();

            },5000);

        },i*20);

    }

}

function startConfetti(){

    confetti({

        particleCount:220,

        spread:120,

        origin:{y:0.6}

    });

}
