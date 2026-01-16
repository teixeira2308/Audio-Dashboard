const ctx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = ctx.createAnalyser();
analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const audioElement = document.querySelector('audio');
const source = ctx.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(ctx.destination);

function draw() {
    requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);

    
}