const BOT_NAME = BOT.name;

// Debug-Ausgabe
function debugLog(message) {

    if (!BOT.debug) return;

    console.log(`[MostiBot] ${message}`);

}

debugLog("Version " + BOT.version + " gestartet");

// Bot-Nachricht senden
function sendBotMessage(text) {

    if (!text) return;

    db.ref("chat").push({

        user: BOT.name,

        text: text,

        bot: true,

        time: Date.now()

    });

    debugLog("Bot: " + text);

}

// Befehle verarbeiten
function handleCommand(user, message) {

    // Eigene Nachrichten ignorieren
if (user === BOT.name) {
    return;
}

    if (!message) return;

    message = message.trim().toLowerCase();

    if (COMMANDS[message]) {

        COMMANDS[message](user);

    }

}
