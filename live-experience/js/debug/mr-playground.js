import { playProduct } from "../service/player";

document.getElementById("btnBeer").addEventListener("click", () => {

    MR.queue.add({
        type: "beer",
        user: "Harald"
    });

});

document.getElementById("btnFirework").addEventListener("click", () => {

    MR.queue.add({
        type: "firework",
        user: "Harald"
    });

});

document.getElementById("btnApple").addEventListener("click", () => {

    MR.queue.add({
        type: "apple",
        user: "Harald",
    });

});

document.getElementById("btnHeart").addEventListener("click", () => {

    MR.queue.add({
        type: "heart",
        user: "Harald",
    });

});

document.getElementById("btnTractor").addEventListener("click", () => {

    MR.queue.add({
        type: "tractor",
        user: "Harald",
    });

});

document.getElementById("btnLegend").addEventListener("click", () => {

    MR.queue.add({
        type: "legend",
        user: "Harald",
    });

});