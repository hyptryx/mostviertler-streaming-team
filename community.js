document.addEventListener("DOMContentLoaded", () => {

    const fill = document.getElementById("progressFill");

    if(!fill) return;

    const percent = 68;

    setTimeout(()=>{

        fill.style.width = percent + "%";

    },500);

});

