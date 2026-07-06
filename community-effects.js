/* ==========================================
   COMMUNITY EFFECTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    if(params.get("success") === "true"){

        startCommunityAnimation();

    }

});
