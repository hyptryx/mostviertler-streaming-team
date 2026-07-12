console.log("🤖 MostiBot V1 gestartet");

const BOT_NAME = "🤖 MostiBot";

// Bot-Nachricht senden
function sendBotMessage(text) {

    db.ref("chat").push({
        user: BOT_NAME,
        text: text,
        bot: true,
        time: Date.now()
    });

}

// Befehle verarbeiten
function handleCommand(user, message) {

    if (!message) return;

    message = message.trim().toLowerCase();

    switch (message) {

        case "!commands":

            sendBotMessage(
`📜 Verfügbare Befehle:

🎉 !party
🍺 !bier
🎧 !dj`
            );

            break;

    }

}
