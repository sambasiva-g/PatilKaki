// script.js
// Countdown Timer
const countdownElement = document.getElementById('timer');

function countdown() {
    const endTime = new Date().getTime() + 600000; // 10 minutes in milliseconds

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = 'EXPIRED';
        }
    }, 1000);
}

countdown();

// Form Slide Up
setTimeout(() => {
    const slideForm = document.querySelector('.slide-form');
    slideForm.classList.add('active');
}, 15000);
