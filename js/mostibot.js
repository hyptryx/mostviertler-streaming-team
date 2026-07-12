console.log("🤖 MostiBot wurde geladen.");

// =====================================
// MostiBot V1
// =====================================

const BOT_NAME = "🤖 MostiBot";

// Auf neue Chat-Nachrichten hören
db.ref("chat").on("child_added", (snapshot) => {

    const data = snapshot.val();

    if (!data) return;

    // Keine Bot-Nachrichten selbst verarbeiten
    if (data.user === BOT_NAME) return;

    const message = data.text.trim().toLowerCase();

    switch (message) {

        case "!commands":

            sendBotMessage(
                "📜 Verfügbare Befehle:\n\n" +
                "🎉 !party\n" +
                "🍺 !bier\n" +
                "🎧 !dj"
            );

            break;

    }

});

// Bot-Nachricht senden
function sendBotMessage(text) {

    db.ref("chat").push({
        user: BOT_NAME,
        text: text,
        time: Date.now(),
        bot: true
    });

}
