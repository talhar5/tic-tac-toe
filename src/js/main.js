const boxes = document.querySelectorAll("[mark-box]");
const popupMsg = document.querySelector(".popup-message");
const board = document.getElementById('board');
const popup = document.getElementById('popup');
const resetBtn = document.getElementById('resetBtn');
let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let currentTurnX = true;

startGame();


resetBtn.addEventListener("click", handleReset);

function handleClick(e) {
    let currentElem = e.target;

    // mark the box
    markBox(currentElem, currentTurnX);

    // check for win
    if (checkForWin()) {
        popupMsg.innerHTML = currentTurnX ? "X is winner" : "O is winner"
        popup.classList.add("show")
        return;
    }

    // check for draw
    if (checkForDraw()) {
        popupMsg.innerHTML = "Draw!"
        popup.classList.add("show")
        return;
    }
    // change turn
    changeTurn();

    // update whosturn
    whosturn.innerHTML = currentTurnX ? "X's turn" : "O's turn";
    e.target.removeEventListener('click', handleClick);
}

function handleReset(e) {
    popup.classList.remove("show")
    boxes.forEach(item => {
        item.classList.remove("x");
        item.classList.remove("o");
        item.removeEventListener("click", handleClick)
    })
    startGame();
}

function checkForDraw() {
    let final = true;
    boxes.forEach((item) => {
        final = final * (item.classList.contains("x") || item.classList.contains("o"));
    })
    return final;
}

function checkForWin() {
    return winCombinations.some(arrItem => {
        return arrItem.every(item => {
            return boxes[item].classList.contains(currentTurnX ? "x" : "o");
        });
    })
}


function changeTurn() {
    currentTurnX = !currentTurnX;
    startGame();
}

function startGame() {
    board.classList.remove("x");
    board.classList.remove("o");
    board.classList.add(currentTurnX ? "x" : "o")
    boxes.forEach(item => {
        item.addEventListener('click', handleClick, { once: true })
    })
}

function markBox(currentElem, currentTurnX) {
    let classToAdd = currentTurnX ? "x" : "o";
    currentElem.classList.add(classToAdd);
}

let whosturn = document.getElementById("whosturn");
let targetElem = document.getElementById("targetElem");
let divTopPosition = targetElem.getBoundingClientRect().top - whosturn.offsetHeight - 3;
whosturn.style.top = divTopPosition + "px";