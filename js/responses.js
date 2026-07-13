// =====================================
// MostiBot Antworten
// =====================================

const RESPONSES = {

    party: [

"🎉 {user} eröffnet die Party! Musik aufdrehen! 🔥",
"🥳 Jetzt geht's rund! {user} bringt Stimmung ins MostiRadio!",
"🎧 Die Tanzfläche gehört jetzt {user}!",
"🍏 Party-Modus aktiviert von {user}!",
"🎊 Achtung! {user} sorgt für gute Laune!",
"🪩 Disco-Modus aktiviert! Danke {user}!",
"💃 Alle auf die Tanzfläche! {user} hat den Startschuss gegeben!",
"🎵 Lautsprecher auf Anschlag – {user} meint es ernst!",
"🔥 Die Party kann beginnen! {user} hat das Kommando übernommen!",
"🎶 Jetzt wird gefeiert! {user} bringt den Rhythmus mit!",
"🚨 Partyalarm! {user} ist im Feiermodus!",
"🍻 Musik laut, Sorgen leise – danke {user}!",
"🎧 Jetzt gibt's kein Halten mehr! {user} startet die Party!",
"🥳 Das MostiRadio bebt – {user} ist schuld! 😄",
"🎉 Hände hoch! {user} hat die Party eröffnet!",
"🎶 Gute Musik + gute Leute = {user} war da!",
"🕺 Wer sitzt noch? {user} fordert alle zum Tanzen auf!",
"💥 Boom! {user} hat den Partyknopf gedrückt!",
"🍏 Jetzt wird gefeiert, bis der DJ Pause macht!",
"🎊 Die Stimmung steigt – danke {user}!",
"🎵 Party on! {user} bringt Schwung in den Chat!",
"🪩 Licht aus, Musik an – {user} legt los!",
"🔥 Jetzt wird das MostiRadio zur Partyzone!",
"🎉 Achtung! {user} hat den Feiermodus aktiviert!",
"🎧 Boxen aufdrehen! {user} ist bereit!"

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
