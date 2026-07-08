/* =====================================================
   MostiFX Engine v0.1
   Mostviertler Streaming Team
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Canvas erzeugen
    const canvas = document.createElement("canvas");
    canvas.id = "mostifx-canvas";

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    function resize(){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize", resize);

});
