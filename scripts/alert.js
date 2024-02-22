const btn = document.querySelector(".rgb-btn")

const alert_array = ["Don't eat that!"]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let total_alert = getRandomIntInclusive(1, 10);

btn.addEventListener("click", () => {
    for(let i = 0; i < total_alert; i++) {
        let random_alert = getRandomIntInclusive(1, 10);
        total_alert = total_alert - 1;
        alert(alert_array[random_alert]);
    }
})