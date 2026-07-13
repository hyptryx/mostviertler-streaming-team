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
"🥳 Heute kennt die Stimmung nur eine Richtung: nach oben!",
"🎶 Das klingt nach einer langen Partynacht, {user}!",
"💃 Wer tanzt mit {user}?",
"🍏 Die Party ist offiziell eröffnet!",
"🎵 Die Musik läuft – {user} liefert die Stimmung!",
"🎉 Keine Ausreden mehr – jetzt wird gefeiert!",
"🪩 Das Parkett ruft nach {user}!",
"🔥 Die Party ist nicht mehr aufzuhalten!",
"🎧 Mehr Musik, mehr Party, mehr MostiRadio!",
"🥳 Das wird legendär, {user}!",
"🎊 Heute wird gelacht, getanzt und gefeiert!",
"🍻 Die Boxen glühen schon!",
"🎵 Der DJ nickt zustimmend – weiter so {user}!",
"🎉 Jetzt fehlen nur noch Konfetti und Luftballons!",
"🕺 Die Tanzfläche ist offiziell eröffnet!",
"🎶 Wer braucht schon einen Anlass? {user} reicht!",
"🔥 Der Beat sitzt – danke {user}!",
"🎊 Heute bleibt niemand still sitzen!",
"🎧 Musik verbindet – {user} macht's vor!",
"🥳 Stimmung? Check! Musik? Check! {user}? Check!",
"🍏 Die Party läuft jetzt auf Hochtouren!",
"🎵 Vollgas Richtung Feierabend!",
"🎉 MostiRadio feiert mit {user}!",
"🪩 Jetzt wird's bunt im Chat!",
"🔥 Party-Level 100 erreicht!"

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
