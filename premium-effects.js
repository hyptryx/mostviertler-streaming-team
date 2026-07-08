/* =====================================================
   MostiFX Engine v1.0
===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

const nav=document.querySelector(".main-nav");

if(!nav) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

nav.classList.add("fx-scrolled");

}else{

nav.classList.remove("fx-scrolled");

}

});

});
