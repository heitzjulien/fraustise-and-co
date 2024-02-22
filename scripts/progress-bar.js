document.addEventListener('DOMContentLoaded', function () {
    let progressBar = document.getElementById('progressBar');
    let progress = 0;

    function updateProgressBar() {
        progress += 0.01;
        let incoherentProgress = (Math.sin(progress) + 1) / 2 * 100;
        progressBar.style.width = incoherentProgress + '%';
    }

    setInterval(updateProgressBar, 25);
});