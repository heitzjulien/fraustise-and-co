document.addEventListener('DOMContentLoaded', function () {
    let progressBar = document.getElementById('progressBar');
    let progress = 0;

    function updateProgressBar() {
        const color = "#" + (Math.floor(Math.random() * 0xFFFFFF) + 0x100000).toString(16).substring(1);
        progress += 0.01;
        let incoherentProgress = (Math.sin(progress) + 1) / 2 * 100;
        progressBar.style.width = incoherentProgress + '%';
        progressBar.style.background = color
    }

    setInterval(updateProgressBar, 25);
});