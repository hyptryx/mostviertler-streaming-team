document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  initTwitchLiveCheck();
});

async function initTwitchLiveCheck() {
  const channels = ["hyptryx", "tommecs"];
  const clientId = "120zjeo34vu3bpj4kedzrrhfu996jk";

  for (const channel of channels) {
    try {
      const res = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${channel}`,
        { headers: { "Client-ID": clientId } }
      );

      const data = await res.json();
      const isLive = data.data && data.data.length > 0;

      const badge = document.getElementById(`live-${channel}`);
      const card = document.querySelector(`.twitch-card[data-channel="${channel}"]`);

      if (isLive) {
        badge.textContent = "LIVE";
        badge.style.background = "#ff0033";
        card.style.borderColor = "#4cffd7";
        card.style.boxShadow = "0 0 35px rgba(76,255,215,0.4)";
      } else {
        badge.textContent = "OFFLINE";
      }

    } catch (err) {
      console.error("Fehler:", err);
    }
  }
}
