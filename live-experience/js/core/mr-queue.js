class MRQueue {

    constructor() {
        this.queue = [];
        this.running = false;
    }

    add(alert) {
        this.queue.push(alert);
        this.run();
    }

    async run() {

        if (this.running) return;

        this.running = true;

        while (this.queue.length > 0) {

            const alert = this.queue.shift();

            await window.MR.alertEngine.play(alert);

        }

        this.running = false;

    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

// Namespace anlegen
window.MR = window.MR || {};

// Queue registrieren
window.MR.queue = new MRQueue();