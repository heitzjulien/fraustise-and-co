document.addEventListener('DOMContentLoaded', function () {

    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const timerDisplay = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        document.getElementById('timer').textContent = timerDisplay;
    }

    let timeInSeconds = 2 * 60;

    function updateTimer() {
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateTimerDisplay(timeInSeconds);
        } else {
            let loc = "/poc/firework.html"
            window.location.href = loc
        }
    }
    const timerInterval = setInterval(updateTimer, 1000);
});
