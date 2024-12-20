const countdownDate = new Date("2024-12-31 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "<h1>Time's up!</h1>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();