// Mines
let minesCnt = document.querySelector(".container .mines-game");

let numberOfMines = 16;

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