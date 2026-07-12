// =====================================
// MostiBot Befehle
// =====================================

const COMMANDS = {

    "!commands": showCommands,
    "!party": partyCommand,
    "!bier": beerCommand,
    "!dj": djCommand

};

// =====================================
// !commands
// =====================================

function showCommands(user) {

    debugLog(user + " hat !commands ausgeführt.");

    sendBotMessage(
`📜 Verfügbare Befehle

🎉 !party
🍺 !bier
🎧 !dj`
    );

}

// =====================================
// !party
// =====================================

function partyCommand(user) {

    sendBotMessage(
        getRandomResponse("party", user)
    );

}

// =====================================
// !bier
// =====================================

function beerCommand(user) {

    sendBotMessage(
        getRandomResponse("bier", user)
    );

}

// =====================================
// !dj
// =====================================

function djCommand(user) {

    const djStatus =
        document.getElementById("dj-status");

    let dj = "Momentan ist kein DJ live.";

    if (
        djStatus &&
        djStatus.style.display !== "none"
    ) {

        dj = djStatus.innerText;

    }

    sendBotMessage(dj);

}
