document.addEventListener("DOMContentLoaded", function() {
    var confettiCanvas = document.getElementById('confettiCanvas');
    var myConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });

    myConfetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.5 }
    });
});