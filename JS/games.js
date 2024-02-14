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

mines.addEventListener("click",function(){
    gamesContainer.style.display="none"
    touchpad.style.display="none"
    minesContainer.style.display="contents"
})
minesBack.addEventListener("click",function(){
    gamesContainer.style.display="block"
    touchpad.style.display="flex"
    minesContainer.style.display="none"
})

let minesCnt = document.querySelector(".mines-container .mines-game");

let numberOfMines = 25;

for (var i = 1; i <= numberOfMines; i++) {
    let minesBox = document.createElement("div");
    minesBox.classList.add("mines-game-box");
    minesCnt.appendChild(minesBox);
    minesBox.addEventListener("click", () => {
        minesBox.classList.add("mines-game-box-open")
    })
}

// mines select

var selectElement = document.getElementById("mine-select");

var numberOfOptions = 15;

for (var i = 1; i <= numberOfOptions; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectElement.appendChild(option);
}