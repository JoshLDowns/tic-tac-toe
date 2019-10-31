let playerTurn = true;
let playerArray = [];
let compArray = [];
let turnCount = 0;

let boxes = Array.from(document.getElementsByClassName("box"));

class Box {
    constructor(element) {
        this.element = element;
        this.clicked = false;
    }
}
let one = new Box(document.getElementById("one"));
let two = new Box(document.getElementById("two"));
let three = new Box(document.getElementById("three"));
let four = new Box(document.getElementById("four"));
let five = new Box(document.getElementById("five"));
let six = new Box(document.getElementById("six"));
let seven = new Box(document.getElementById("seven"));
let eight = new Box(document.getElementById("eight"));
let nine = new Box(document.getElementById("nine"));

let boxIDLookUp = {
    'one': one,
    'two': two,
    'three': three,
    'four': four,
    'five': five,
    'six': six,
    'seven': seven,
    'eight': eight,
    'nine': nine
}

function boxClick() {
    let boxNum = event.target.id;
    let currentBox = boxIDLookUp[boxNum];
    if (playerTurn = true && currentBox.clicked === false) {
        event.target.textContent = "X";
        currentBox.clicked = true;
        playerArray.push(boxNumLookUp[boxNum]);
        playerClick();
        removeEventListener("click", boxClick);
        turnCount += 1;
    }
}

for (box of boxes) {
    box.addEventListener("click", boxClick);
}

let winningArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]];

let boxNumLookUp = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}

function playerClick() {
    if (playerArray.length >= 3) {
        for (arr of winningArrays) {
            let trueCount = 0;
            for (let i = 0; i < playerArray.length; i++) {
                if (arr.includes(playerArray[i])) {
                    trueCount = trueCount + 1;
                }
            }
            if (trueCount === 3) {
                let winText = document.getElementById("win");
                winText.textContent = "YOU WIN!!!!";
            }
        }
    } else {
    return playerTurn = false;
    }
}
