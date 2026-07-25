/**
 * ===========================================
 * MostiRadio Sound Engine
 * ===========================================
 */

window.MR = window.MR || {};

MR.sound = {

    enabled: true,

    volume: 0.5,

    sounds: {},

    load(name, src, volume = 1) {

    const audio = new Audio(src);

    audio.preload = "auto";

    this.sounds[name] = {

        audio,

        volume

    };

},

    play(name) {

    if (!this.enabled) return;

    const sound = this.sounds[name];

    if (!sound) return;

    const audio = new Audio(sound.audio.src);

    audio.preload = "auto";

    audio.volume = this.volume * sound.volume;

    audio.play().catch(console.error);

},

    setVolume(volume) {

        this.volume = volume;

    },

    enable() {

        this.enabled = true;

    },

    disable() {

        this.enabled = false;

    }

};