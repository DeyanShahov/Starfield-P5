let textDimension = 25;
let numButtons = 4;
let buttonWidth = 150;
let buttonHeight = 75;
let MENU = 0;

let singleTimeSetUp = false;
let stars = [];

let speed;

function setup() {
    createCanvas(600, 600);
}


function draw() {
    if (MENU === 0) createMenu();
    else if (MENU == 1) {
        drawV1();
    } else if (MENU == 2) {
        drawV2();
    } else if (MENU == 3) {
        drawV3();
    }
}

function createMenu() {
    background(125);

    fill(0);
    let currentButtonX = 50;
    let currentButtonY = 50;
    for (let i = 1; i <= numButtons; i++) {
        rect(currentButtonX, currentButtonY, buttonWidth, buttonHeight);
        currentButtonY = currentButtonY + buttonHeight * 2;

        if (currentButtonY + buttonHeight > height) {
            currentButtonY = 50;
            currentButtonX += buttonWidth + 50;
        }
    }

    textSize(textDimension);
    fill(255);

    let currentTextX = 75;
    let currentTextY = 100;
    for (let i = 1; i <= numButtons; i++) {
        text(`Stars V${i}`, currentTextX, currentTextY);
        currentTextY += buttonHeight * 2;

        if (currentTextY + textDimension > height) {
            currentTextY = 100;
            currentTextX += buttonWidth + 50;
        }
    }
}

function mouseClicked() {
    if (MENU == 0) {
        if (mouseX < 200 && mouseX > 50) {
            if (mouseY < 125 && mouseY > 50) {
                MENU = 1;
                print(MENU);
            }
            if (mouseY < 275 && mouseY > 200) {
                MENU = 2;
                print(MENU);
            }
            if (mouseY < 425 && mouseY > 350) {
                MENU = 3;
                print(MENU);
            }
        }
    }
}

function checkForBackToMenu() {
    if (mouseButton == RIGHT) {
        MENU = 0;
        singleTimeSetUp = false;
        stars = [];
        noStroke();
    }
}


