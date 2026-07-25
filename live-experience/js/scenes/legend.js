/**
 * =====================================================
 * MostiRadio Live Experience
 * Scene: LEGEND
 * =====================================================
 */

class LegendScene {

    async play(stage, alert) {

        const legendMessages = MR.config.messages.legend;

        const randomMessage =
        legendMessages[Math.floor(Math.random() * legendMessages.length)];

        stage.innerHTML = `

        <div class="mr-legend-scene">

            <video
                class="mr-legend-video"
                autoplay
                playsinline>

                <source
                    src="assets/video/legend.webm"
                    type="video/webm">

            </video>

            <div class="mr-legend-text">

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

        const video = stage.querySelector(".mr-legend-video");
        const text = stage.querySelector(".mr-legend-text");
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

tl.call(() => {

    MR.sound.play("legend");

}, null, 0);

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
    duration:6.7
});

// Text früher ausblenden
tl.to(text,{
    opacity:0,
    duration:0.4
});

// Video noch 2 Sekunden weiterlaufen lassen
tl.to({},{
    duration:1.8
});

// Video langsam ausblenden
tl.to(video,{
    opacity:0,
    duration:0.4
});

        });

    }

}

window.MR = window.MR || {};

MR.scenes = MR.scenes || {};

MR.scenes.legend = new LegendScene();