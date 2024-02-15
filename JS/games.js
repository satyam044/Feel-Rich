let container = document.querySelector(".container")
let touchpad = document.querySelector(".touchpad")
let gamesContainer = document.querySelector(".game-container")
let minesContainer = document.querySelector(".mines-container")
let coins = document.querySelector("#coinsJs")

let coinHtml = parseInt(coins.innerText);

touchpad.addEventListener("click", function () {
    coinHtml++;
    coins.innerHTML = `${coinHtml} <i class="fa-solid fa-coins"></i>`;
});



// mines
let mines = document.getElementById("Mines")
let minesBack = document.querySelector("#mines-back-btn")

mines.addEventListener("click", function () {
    gamesContainer.style.display = "none"
    touchpad.style.display = "none"
    minesContainer.style.display = "contents"
})
minesBack.addEventListener("click", function () {
    gamesContainer.style.display = "block"
    touchpad.style.display = "flex"
    minesContainer.style.display = "none"
})

// mines box
let minesCnt = document.querySelector(".mines-container .mines-game");
let numberOfMines = 25;
let diamond = '<i class="fa-solid fa-gem"></i>';
let bomb = '<i class="fa-solid fa-bomb"></i>';

for (var i = 1; i <= numberOfMines; i++) {
    let minesBox = document.createElement("div");
    minesBox.classList.add("mines-game-box");
    minesCnt.appendChild(minesBox);
    minesBox.innerHTML = diamond;

    minesBox.addEventListener("click", () => {
        if (minesBox.classList.contains("bomb")) {
            document.querySelectorAll(".mines-game-box").forEach(box => {
                box.classList.add("mines-game-box-open");
                box.style.opacity = "0.3"
            });
        }
        minesBox.classList.add("mines-game-box-open");
        minesBox.classList.add("opacity");
        minesBox.style.opacity = "1"
    });
}

// mines select
var selectElement = document.getElementById("mine-select");
var numberOfOptions = 15;

for (var i = 1; i <= numberOfOptions; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectElement.appendChild(option);
    var selectElement = document.getElementById("mine-select");
    var numberOfOptions = 24;

    function bombPlacement() {
        let numberOfBombs = parseInt(selectElement.value);

        let previousBombs = minesCnt.querySelectorAll(".bomb");
        previousBombs.forEach(bombElement => {
            bombElement.innerHTML = diamond;
            bombElement.classList.remove("bomb");
        });

        let availableIndices = Array.from({ length: minesCnt.children.length }, (_, index) => index);

        for (let i = 0; i < numberOfBombs; i++) {
            let randomIndex = Math.floor(Math.random() * availableIndices.length);
            let randomChildIndex = availableIndices.splice(randomIndex, 1)[0];

            let randomChild = minesCnt.children[randomChildIndex];

            randomChild.innerHTML = bomb;
            randomChild.classList.add("bomb");
        }
    }
    bombPlacement()

    selectElement.addEventListener("change", function () {
        bombPlacement()
    });


}