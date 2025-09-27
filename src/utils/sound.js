// src/utils/sound.js

let audioCtx;
let isMuted = false; // 🔇 default: sound ON

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

export function toggleMute() {
    isMuted = !isMuted;
    return isMuted;
}

export function getMuteStatus() {
    return isMuted;
}

export function playCuteSound(frequency = 500, duration = 0.15) {
    if (isMuted) return; // 🚫 do nothing if muted

    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = frequency;

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
}

// export function playRandomCuteNote() {
//   if (isMuted) return;

//   const notes = [392, 440, 494, 523, 587, 659, 698]; 
//   const randomFreq = notes[Math.floor(Math.random() * notes.length)];
//   playCuteSound(randomFreq, 0.2);
// }

// Map note names + octaves → frequency
const noteFrequencies = {
    "Db5": 554.37,
    "Eb5": 622.25,
    "F#4": 369.99,
    "F#5": 739.99,
    "B4": 493.88,
};

// Multo chorus sequence 🎵
const multoChorus = [
    "B4", "B4", "F#5", "Eb5", "Db5", "Eb5", "F#4", "F#4", "F#4",
    "B4", "B4", "F#5", "Eb5", "Db5", "Eb5", "F#4", "F#4", "Db5",
    "B4", "B4", "F#5", "Eb5", "Db5", "Eb5", "F#4", "F#4", "F#4",
    "Db5", "B4", "Db5", "B4", "Db5", "B4", "Eb5", "Db5"
];

let multoIndex = 0;

export function playMultoNote() {
    if (isMuted) return;
    const note = multoChorus[multoIndex];
    const freq = noteFrequencies[note];
    if (freq) playCuteSound(freq, 0.25);


    multoIndex = (multoIndex + 1) % multoChorus.length;
}