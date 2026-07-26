import { logout } from "../auth.js";

export function renderWallet(profile) {

    console.log("Wallet:", profile);

    const container = document.getElementById("wallet-container");

    if (!container) {
        console.error("Wallet-Container nicht gefunden.");
        return;
    }

    container.innerHTML = `
    <div class="wallet">

        <div class="wallet-header">
            <h2>MostiWallet</h2>
        </div>

        <div class="wallet-user">

 <img
    class="wallet-avatar"
    src="${profile.photoURL}"
    alt="${profile.displayName}"
>

    <div class="wallet-user-info">

        <div class="wallet-name">
            ${profile.displayName}
        </div>

        <div class="wallet-chatname">
            @${profile.chatName}
        </div>

        <div class="wallet-logout">
         Abmelden
        </div>

    </div>

</div>

        <div class="wallet-stats">

           <div class="wallet-balance">

    <div class="wallet-label">

    <img
        src="assets/images/mosticoins.png"
        class="coin-icon"
        alt="MostiCoin"
    >

    <span>MostiCoins</span>

</div>

    <div class="wallet-value">
        ${profile.balance}
    </div>

</div>

<div class="wallet-lifetime">

    <div class="wallet-label">
        ⭐ Lifetime
    </div>

    <div class="wallet-value">
        ${profile.lifetimeCoins}
    </div>

</div>

        </div>

        <div class="wallet-actions">

            <button id="buyCoinsButton">
                ➕ MostiCoins kaufen
            </button>

        </div>

    </div>
`;

const buyButton = document.getElementById("buyCoinsButton");
const modal = document.getElementById("shop-modal");
const close = document.getElementById("closeShop");
const logoutButton = document.querySelector(".wallet-logout");

buyButton.addEventListener("click", () => {

    modal.classList.add("show");

});

close.addEventListener("click", () => {

    modal.classList.remove("show");

});

logoutButton.addEventListener("click", async () => {

    await logout();

});

}