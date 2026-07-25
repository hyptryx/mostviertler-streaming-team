class MRAlertEngine {

    async play(alert) {

        const stage = document.getElementById("scene-stage");

        // Bühne einblenden
        stage.classList.add("show");

        // Szene abspielen (die Szene entscheidet selbst, wann sie fertig ist)
        switch (alert.type) {

            case "beer":
                await MR.scenes.beer.play(stage, alert);
                break;

            case "firework":
                await MR.scenes.firework.play(stage, alert);
                break;

            case "apple":
                await MR.scenes.apple.play(stage, alert);
                break;

            case "heart":
                await MR.scenes.heart.play(stage, alert);
                break;

            case "atomic_drop":
                await MR.scenes.atomic_drop.play(stage, alert);
                break;

            case "legend":
                await MR.scenes.legend.play(stage, alert);
                break;

            default:
                console.warn("Keine Szene für:", alert.type);
                break;

        }

        // Bühne ausblenden
        stage.classList.remove("show");

    }

    getIcon(type){

        switch(type){

            case "beer": return "🍺";
            case "firework": return "🎆";
            case "apple": return "🍏";
            case "heart": return "❤️";
            case "tractor": return "🚜";
            case "legend": return "👑";

            default: return "🎉";

        }

    }

    getTitle(type){

        switch(type){

            case "beer": return "hat ein Bier spendiert!";
            case "firework": return "Feuerwerk gestartet!";
            case "apple": return "Goldener Mostapfel";
            case "heart": return "schickt Liebe";
            case "tractor": return "Nachschub ist da!";
            case "legend": return "MOSTI LEGEND";

            default: return "";

        }

    }

    wait(ms){

        return new Promise(resolve => setTimeout(resolve, ms));

    }

}

window.MR = window.MR || {};

window.MR.alertEngine = new MRAlertEngine();