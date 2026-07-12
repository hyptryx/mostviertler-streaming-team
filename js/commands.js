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

    const list = RESPONSES.party;

    const random =
        list[Math.floor(Math.random() * list.length)];

    sendBotMessage(
        random.replace("{user}", user)
    );

}

// ----------------------------

function beerCommand(user) {

    const list = RESPONSES.bier;

    const random =
        list[Math.floor(Math.random() * list.length)];

    sendBotMessage(
        random.replace("{user}", user)
    );

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
