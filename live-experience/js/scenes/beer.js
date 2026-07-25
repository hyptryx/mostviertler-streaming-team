/**
 * =====================================================
 * MostiRadio Live Experience
 * Scene: PROST!
 * =====================================================
 */

class BeerScene {

    async play(stage, alert) {

    const beerMessages = MR.config.messages.beer;

    const randomMessage =
    beerMessages[Math.floor(Math.random() * beerMessages.length)];  

        stage.innerHTML = `

            <div class="mr-beer-scene">

                <div class="mr-beer-group">

                    <img
                        class="mr-beer-object"
                        src="assets/beer/beer.png"
                        alt="Beer">

                    <img
                        class="mr-foam"
                        src="assets/beer/foam.png"
                        alt="Foam">

                    <img
                        class="mr-sparkle"
                        src="assets/beer/sparkle.png"
                        alt="Sparkle">

                </div>

                <img
                    class="mr-bubbles"
                    src="assets/beer/bubbles.png"
                    alt="Bubbles">

                <div class="mr-beer-text">

<div class="mr-user-name">

    <span class="mr-name-text">
        ${alert.user}
    </span>

    <span class="mr-name-shine"></span>

</div>

<div class="mr-name-line"></div>

<div class="mr-message">
    ${randomMessage}
</div>

                </div>

            </div>

        `;

        const beerGroup = stage.querySelector(".mr-beer-group");
        const foam = stage.querySelector(".mr-foam");
        const sparkle = stage.querySelector(".mr-sparkle");
        const bubbles = stage.querySelector(".mr-bubbles");
        const text = stage.querySelector(".mr-beer-text");
        const userName = stage.querySelector(".mr-user-name");
        const message = stage.querySelector(".mr-message");
        const shine = stage.querySelector(".mr-name-shine");

        gsap.set(foam,{
            opacity:0,
            scale:0
        });

        gsap.set(sparkle,{
            opacity:0,
            scale:0
        });

        gsap.set(bubbles,{
            opacity:0
        });

        gsap.set(userName,{
    opacity:0,
    y:25,
    scale:0.7
});

gsap.set(message,{
    opacity:0,
    y:15
});

        return new Promise(resolve => {

            const tl = gsap.timeline({

                onComplete:() => {

                    stage.innerHTML = "";

                    resolve();

                }

            });

// -------------------------
// Bier fliegt herein
// -------------------------

tl.call(() => {

    MR.sound.play("whoosh");

}, null, 0);

gsap.set(beerGroup,{
    x:-1400,
    y:-120,
    rotation:-75,
    scale:0.60
});

// X-Bewegung
tl.to(beerGroup,{
    x:0,
    duration:MR.config.animation.beer.flyIn,
    ease:"power2.out"
},0);

// Y-Bewegung (Wurfkurve)
tl.fromTo(beerGroup,
{
    y:-120
},
{
    y:0,
    duration:MR.config.animation.beer.flyIn,
    ease:"power3.in"
},0);

// Rotation
tl.to(beerGroup,{
    rotation:0,
    duration:MR.config.animation.beer.flyIn,
    ease:"power2.out"
},0);

// Größe
tl.to(beerGroup,{
    scale:1,
    duration:MR.config.animation.beer.flyIn,
    ease:"power2.out"
},0);

// schwerer Aufprall

tl.to(beerGroup,{
    y:18,
    duration:0.08,
    ease:"power1.in",
    onStart:() => {

        MR.sound.play("beerLand");

        MR.camera.shake(0.12,4);

    }
});

tl.to(beerGroup,{
    scaleX:1.05,
    scaleY:0.95,
    duration:0.05,
    ease:"power1.out"
},"<");

tl.to(beerGroup,{
    scaleX:1,
    scaleY:1,
    duration:0.08,
    ease:"power2.out"
});

tl.to(beerGroup,{
    y:-10,
    duration:0.15,
    ease:"power2.out"
});

tl.to(beerGroup,{
    y:0,
    duration:0.25,
    ease:"power2.in"
});

// -------------------------
// Schaum ploppt auf
// -------------------------

tl.call(() => {

    MR.sound.play("foamPop");

}, null, ">0.08");

tl.set(foam,{
    opacity:1,
    scale:0.25
});

tl.to(foam,{
    scale:1.25,
    y:-8,
    duration:0.12,
    ease:"back.out(2.5)"
});

tl.to(foam,{
    scale:0.94,
    y:2,
    duration:0.08,
    ease:"power2.in"
});

tl.to(foam,{
    scale:1,
    y:0,
    duration:0.08,
    ease:"power2.out"
});

// -------------------------
// Glanz
// -------------------------

tl.set(sparkle,{
    opacity:0,
    scale:0.3,
    rotation:-15
},"-=0.1");

tl.to(sparkle,{
    opacity:1,
    scale:1.25,
    rotation:10,
    duration:0.12,
    ease:"power2.out"
});

tl.to(sparkle,{
    scale:0.9,
    rotation:18,
    duration:0.10,
    ease:"power1.inOut"
});

tl.to(sparkle,{
    opacity:0,
    scale:1.4,
    rotation:25,
    duration:0.18,
    ease:"power2.in"
});

            // -------------------------
            // Blasen
            // -------------------------

            tl.call(() => {

            MR.sound.play("beerBubbles");

            }, null, ">0.08");

            tl.fromTo(

                bubbles,

                {
                    opacity:0,
                    y:20,
                    scale:.8
                },

                {
                    opacity:1,
                    y:-70,
                    scale:1,
                    duration:MR.config.animation.beer.bubbles,
                    ease:"power1.out"
                },

                "<"

            );

            // Leichtes Schweben der Blasen
tl.to(bubbles,{
    x:-6,
    duration:0.30,
    ease:"sine.inOut",
    repeat:3,
    yoyo:true
},"<");

            tl.to(bubbles,{
                opacity:0,
                duration:.8
            },"-=.5");

// -------------------------
// Benutzername
// -------------------------

tl.to(userName,{
    opacity:1,
    y:0,
    scale:1.08,
    duration:0.18,
    ease:"back.out(3)"
},"-=1.2");

tl.to(userName,{
    scale:1,
    duration:0.10,
    ease:"power2.out"
});

// Leichtes Atmen des Namens

tl.to(userName,{
    scale:1.02,
    duration:0.35,
    ease:"sine.inOut"
});

tl.to(userName,{
    scale:1,
    duration:0.35,
    ease:"sine.inOut"
});

// -------------------------
// Nachricht
// -------------------------

tl.fromTo(message,
{
    opacity:0,
    y:20,
    scale:0.92
},
{
    opacity:1,
    y:0,
    scale:1.05,
    duration:0.22,
    ease:"back.out(2.5)"
},"-=0.02");

tl.to(message,{
    scale:1,
    duration:0.08,
    ease:"power2.out"
});

// -------------------------
// Gold Shine
// -------------------------

tl.call(() => {

    MR.sound.play("shine");

});

tl.fromTo(shine,
{
    xPercent:-180,
    opacity:0
},
{
    xPercent:320,
    opacity:1,
    duration:0.55,
    ease:"power1.inOut"
},"-=0.15");

tl.to(shine,{
    opacity:0,
    duration:0.12
},"-=0.12");

// Hero-Moment für den Bierkrug
tl.to(beerGroup,{
    scale:1.04,
    duration:0.12,
    ease:"power2.out"
},"<");

tl.to(beerGroup,{
    scale:1,
    duration:0.10,
    ease:"power2.inOut"
});

            // -------------------------
            // Prost-Wackler
            // -------------------------

            tl.to(beerGroup,{
                rotation:-4,
                duration:.10
            });

            tl.to(beerGroup,{
                rotation:4,
                duration:.10
            });

            tl.to(beerGroup,{
                rotation:0,
                duration:.10
            });

            // Zuschauer genießen

            tl.to({},{
             duration:1.5
            });

            // Text ausblenden

            tl.to(text,{
                opacity:0,
                duration:.3
            });

           // Whoosh beim Abflug

tl.call(() => {

    MR.sound.play("whooshOut");

});

// kleiner Schwung

tl.to(beerGroup,{
    rotation:28,
    scale:1.05,
    duration:0.12,
    ease:"power2.out"
});

// Abschuss

tl.to(beerGroup,{
    x:1450,
    y:-140,
    rotation:65,
    scale:0.55,
    duration:MR.config.animation.beer.flyOut,
    ease:"power3.in"
});

        });

    }

}

window.MR = window.MR || {};

MR.scenes = MR.scenes || {};

MR.scenes.beer = new BeerScene();