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
import { buyCoinPackage } from "./service/shop";
import { buyInteraction } from "./service/interaction";
import { auth } from "./service/firebase.js";
import { refreshWallet } from "./core/bootstrap.js";

console.log("✅ MostiRadio Live Experience gestartet");

const params = new URLSearchParams(window.location.search);

if (
    params.get("payment") === "success" &&
    auth.currentUser
) {
    await refreshWallet(auth.currentUser.uid);

    console.log("💰 Wallet nach Stripe aktualisiert.");
}

// ======================================
// Produkt-Buttons
// ======================================

document.addEventListener("click", async (e) => {

    if (!e.target.classList.contains("product-button")) return;

    const interactionId = e.target.dataset.animation;

    try {

        const result = await buyInteraction(interactionId);

        await refreshWallet(auth.currentUser.uid);

       console.log("🪙 Wallet:", result);

if (result.interaction?.scene) {

    console.log("🎬 Szene wird über die Live-Queue abgespielt:", result.interaction.scene);

}

    } catch (error) {

        console.error(error);

    }

});

// ======================================
// Produkte laden
// ======================================

await loadProducts();

// ======================================
// MostiShop
// ======================================

document.querySelectorAll(".shop-buy").forEach((button) => {

    button.addEventListener("click", async () => {

        const packageId = button.dataset.package;

        try {

            await buyCoinPackage(packageId);

        } catch (error) {

            console.error(error);
            alert("Der Checkout konnte nicht gestartet werden.");

        }

    });

});