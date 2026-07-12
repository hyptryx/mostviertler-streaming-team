const BOT_NAME = BOT.name;

// Debug-Ausgabe
function debugLog(message) {

    if (!BOT.debug) return;

    console.log(`[MostiBot] ${message}`);

}

debugLog("Version " + BOT.version + " gestartet");

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

    if (COMMANDS[message]) {

        COMMANDS[message](user);

    }

}
