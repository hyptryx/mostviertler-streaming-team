// script.js

// Jahr im Footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Twitch Live Check initialisieren
  initTwitchLiveCheck();
});

// Twitch Live Check
async function initTwitchLiveCheck() {
  const channels = ["hyptryx", "tommecs"];

  // HIER deine Twitch API Daten eintragen
  const clientId = "DEINE_TWITCH_CLIENT_ID";
  const bearerToken = "DEIN_TWITCH_BEARER_TOKEN";

  if (!clientId || !bearerToken) {
    console.warn("Twitch API Credentials fehlen – Live-Status wird nicht abgefragt.");
    return;
  }

  try {
    const url = `https://api.twitch.tv/helix/streams?user_login=${channels.join("&user_login=")}`;
    const res = await fetch(url, {
      headers: {
        "Client-ID": clientId,
        "Authorization": `Bearer ${bearerToken}`
      }
    });

    if (!res.ok) {
      console.warn("Twitch API Fehler:", res.status, await res.text());
      return;
    }

    const data = await res.json();
    const liveChannels = data.data.map(s => s.user_login.toLowerCase());

    channels.forEach(channel => {
      const card = document.querySelector(`.twitch-card[data-channel="${channel}"]`);
      const badge = document.getElementById(`status-${channel}`);

      if (!card || !badge) return;

      if (liveChannels.includes(channel.toLowerCase())) {
        card.classList.add("live");
        badge.classList.add("live");
        badge.textContent = "Live";
      } else {
        card.classList.remove("live");
        badge.classList.remove("live");
        badge.textContent = "Offline";
      }
    });
  } catch (err) {
    console.error("Fehler beim Abrufen des Twitch-Status:", err);
  }
}

