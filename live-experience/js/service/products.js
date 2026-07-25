import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

export async function loadProducts() {

    const productsDiv = document.getElementById("products");

    if (!productsDiv) return;

    productsDiv.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach(doc => {

        const product = doc.data();

        productsDiv.innerHTML += `
            <div class="product-card">

                <h3>${product.icon} ${product.name}</h3>

                <p>${product.description}</p>

                <strong>${product.price} MostiCoins</strong>

                <button
                    class="product-button"
                    data-animation="${product.animation}">
                    Animation testen
                </button>

            </div>
        `;

    });

}

export function registerProductButtons() {

    document.addEventListener("click", (e) => {

        if (!e.target.classList.contains("product-button")) return;

        const animation = e.target.dataset.animation;

        const alert = {

            type: animation,
            username: "Harald",
            message: "",
            coins: 10

        };

        window.MR.queue.add(alert);

    });

}