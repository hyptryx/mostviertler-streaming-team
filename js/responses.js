// =====================================
// MostiBot Antworten
// =====================================

const RESPONSES = {

    party: [

        "🎉 {user} eröffnet die Party! 🔥",
        "🥳 Jetzt geht's rund! {user} bringt Stimmung ins MostiRadio!",
        "🎧 Die Tanzfläche gehört jetzt {user}!",
        "🍏 Party-Modus aktiviert von {user}!",
        "🎊 Achtung! {user} sorgt für gute Laune!"

    ],

    bier: [

        "🍺 Prost {user}! 🍻",
        "🍻 {user} bestellt eine Runde für alle!",
        "🍺 Das erste Bier geht auf {user}!",
        "🍻 Zum Wohl {user}!",
        "🍺 {user} zapft das nächste Fass an!"

    ]

};


// =====================================
// Zufällige Antwort holen
// =====================================

function getRandomResponse(type, user) {

    if (!RESPONSES[type]) return "";

    const list = RESPONSES[type];

    const random =
        list[Math.floor(Math.random() * list.length)];

    return random.replace("{user}", user);

}
