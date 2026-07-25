/**
 * =====================================================
 * MostiRadio Live Experience
 * Scene: ATOMIC DROP
 * =====================================================
 */

class AtomicDropScene {

    async play(stage, alert) {

        const atomicMessages = MR.config.messages.atomic_drop;

        const randomMessage =
        atomicMessages[Math.floor(Math.random() * atomicMessages.length)];

        stage.innerHTML = `

        <div class="mr-atomic-scene">

            <video
                class="mr-atomic-video"
                autoplay
                playsinline>

                <source
                    src="assets/video/atomic_drop.webm"
                    type="video/webm">

            </video>

            <div class="mr-atomic-text">

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

        const video = stage.querySelector(".mr-atomic-video");
        const text = stage.querySelector(".mr-atomic-text");
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

           // Video + Text
tl.to({},{
    duration:9
});

// Text früher ausblenden
tl.to(text,{
    opacity:0,
    duration:0.4
});

// Video noch 2 Sekunden weiterlaufen lassen
tl.to({},{
    duration:2
});

// Video langsam ausblenden
tl.to(video,{
    opacity:0,
    duration:0.6
});

        });

    }

}

window.MR = window.MR || {};

MR.scenes = MR.scenes || {};

MR.scenes.atomic_drop = new AtomicDropScene();