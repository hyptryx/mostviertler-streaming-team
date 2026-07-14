const BOT_NAME = BOT.name;

// =====================================
// Cooldowns
// =====================================

const userCooldowns = {};

// Debug-Ausgabe
function debugLog(message) {

    if (!BOT.debug) return;

    console.log(`[MostiBot] ${message}`);

}

console.count("MostiBot geladen");
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

    // Alte Nachrichten ignorieren
if (!BOT.startupFinished) {
    return;
}

    // Benutzer pro Browser-Sitzung nur einmal begrüßen
const greetedKey = `greeted_${user}`;

if (!sessionStorage.getItem(greetedKey)) {

    sessionStorage.setItem(greetedKey, "true");

    sendBotMessage(
        `👋 Griasti ${user}! Schön, dass du beim MostiRadio dabei bist! 🍏`
    );

}

    if (!message) return;

    // Keine normalen Nachrichten verarbeiten
if (!message.startsWith("!")) {
    return;
}

    message = message.trim().toLowerCase();

    const command = COMMANDS[message];

if (!command) {

    debugLog(`Unbekannter Befehl: ${message}`);
    return;

}

// ----------------------------
// Cooldown prüfen
// ----------------------------

const key = `${user}:${message}`;
const now = Date.now();

if (
    userCooldowns[key] &&
    now < userCooldowns[key]
) {

    debugLog(`${user} hat Cooldown auf ${message}`);
    return;

}

userCooldowns[key] =
    now + command.cooldown;

// ----------------------------

debugLog(`${user} → ${message}`);

command.execute(user);

}

// Bot ist nach kurzer Zeit bereit
setTimeout(() => {

    BOT.startupFinished = true;

    debugLog("Bot ist bereit.");

}, 2000);


