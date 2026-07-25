/**
 * ===========================================
 * MostiRadio Camera Engine
 * ===========================================
 */

window.MR = window.MR || {};

MR.camera = {

    shake(duration = 0.15, strength = 6) {

        const stage = document.getElementById("scene-stage");

        if (!stage) return;

        gsap.killTweensOf(stage);

        gsap.timeline()

            .to(stage,{
                x: strength,
                y: -strength,
                duration: duration / 4
            })

            .to(stage,{
                x: -strength,
                y: strength,
                duration: duration / 4
            })

            .to(stage,{
                x: strength / 2,
                y: -strength / 2,
                duration: duration / 4
            })

            .to(stage,{
                x:0,
                y:0,
                duration: duration / 4,
                ease:"power2.out"
            });

    }

};