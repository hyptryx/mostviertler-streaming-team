/**
 * =====================================================
 * MostiRadio Live Experience
 * Scene: APPLE
 * =====================================================
 */

class AppleScene {

    async play(stage, alert) {

        console.log("🍎 AppleScene gestartet", alert);

        const appleMessages = MR.config.messages.apple;

        const randomMessage =
        appleMessages[Math.floor(Math.random() * appleMessages.length)];

        stage.innerHTML = `

        <div class="mr-apple-scene">

            <video
                class="mr-apple-video"
                autoplay
                playsinline>

                <source
                    src="assets/video/apple.webm"
                    type="video/webm">

            </video>

            <div class="mr-apple-text">

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

        const video = stage.querySelector(".mr-apple-video");
        const text = stage.querySelector(".mr-apple-text");
        const userName = stage.querySelector(".mr-user-name");
        const message = stage.querySelector(".mr-message");
        const shine = stage.querySelector(".mr-name-shine");

        gsap.set(text,{
            opacity:0
        });

        gsap.set(userName,{
            opacity:0,
            y:20,
            scale:0.85
        });

        gsap.set(message,{
            opacity:0,
            y:15
        });

        return new Promise(resolve=>{

            const tl = gsap.timeline({

                onComplete:()=>{

                    stage.innerHTML="";

                    resolve();

                }

            });

            // Text erscheint

            tl.to(text,{
                opacity:1,
                duration:.4
            },0.3);

            tl.to(userName,{
                opacity:1,
                y:0,
                scale:1.05,
                duration:.25,
                ease:"back.out(2.5)"
            });

            tl.to(userName,{
                scale:1,
                duration:.10
            });

            tl.to(message,{
                opacity:1,
                y:0,
                duration:.25
            });

            tl.call(()=>{

                console.log("🍎 Shine wird abgespielt");

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
                duration:.55,
                ease:"power1.inOut"
            });

            tl.to(shine,{
                opacity:0,
                duration:.15
            });

           // Video läuft
tl.to({},{
    duration:4.8
});

// Video langsam ausblenden
tl.to(video,{
    opacity:0,
    duration:0.6
});

// Text noch kurz stehen lassen
tl.to({},{
    duration:0.3
});

// Danach Text ausblenden
tl.to(text,{
    opacity:0,
    duration:0.4
});

        });

    }

}

window.MR = window.MR || {};

MR.scenes = MR.scenes || {};

MR.scenes.apple = new AppleScene();