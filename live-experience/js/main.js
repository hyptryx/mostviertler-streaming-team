import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

window.gsap = gsap;
window.MotionPathPlugin = MotionPathPlugin;

gsap.registerPlugin(MotionPathPlugin);

// Engine initialisieren
import "./core/bootstrap.js";
import "./debug/mr-playground.js";

// Services
import { loadProducts } from "./service/products";
import { playProduct } from "./service/player";

console.log("✅ MostiRadio Live Experience gestartet");

// ======================================
// Produkt-Buttons
// ======================================

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("product-button")) return;

    playProduct(e.target.dataset.animation);

});

// ======================================
// Produkte laden
// ======================================

await loadProducts();