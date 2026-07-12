// =====================================
// MostiBot Befehle
// =====================================

const COMMANDS = {

    "!commands": showCommands,

    "!party": partyCommand,

    "!bier": beerCommand,

    "!dj": djCommand

};

// ----------------------------

function showCommands(user) {

    sendBotMessage(
`📜 Verfügbare Befehle:

🎉 !party
🍺 !bier
🎧 !dj`
    );

}

// ----------------------------

function partyCommand(user) {

    sendBotMessage(`🎉 ${user} startet die Party!`);

}

// ----------------------------

function beerCommand(user) {

    sendBotMessage(`🍺 Prost ${user}!`);

}

// ----------------------------

function djCommand(user) {

    const djStatus =
        document.getElementById("dj-status");

    let dj = "Kein DJ";

    if (djStatus &&
        djStatus.style.display !== "none") {

        dj = djStatus.innerText;

    }

    sendBotMessage(`🎧 ${dj}`);

}
