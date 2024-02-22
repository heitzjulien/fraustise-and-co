const reflexDiv = document.querySelector(".reflex");

function createReflexButton() {
    const color = "#" + (Math.floor(Math.random() * 0xFFFFFF) + 0x1000000).toString(16).substring(1);
    let size = 10 + Math.floor(Math.random() * 40);
    let top = Math.floor( Math.random() * 700 );
    let left = Math.floor( Math.random() * 1300 );

    reflexDiv.innerHTML = `<button class="btn-reflex" style="all: unset; cursor: pointer; position: absolute; top: ${top}px; left: ${left}px;"><div style="border-radius: 1000px; background: ${color}; width: ${size}px; height: ${size}px;"></div></button>`
    const btn = document.querySelector(".btn-reflex");

    if (btn) {
        btn.addEventListener("click", () => {
            btn.remove();
            createReflexButton();
        })
    }
}

createReflexButton();
