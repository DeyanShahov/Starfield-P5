const textDimension = 25;
const numButtons = 7;
const numButtonsInCol = 4;

let buttonWidth = 150;
let buttonHeight = 75;
let MENU = 0;

let singleTimeSetUp = false;
let stars = [];

let speed;

let startButton = {
    color: 'rgb(255, 160, 54)', hover_color: 'rgb(255,192,64)', corner_radius: 10, border_color: 'Black', border_hover_color: 'Yellow',
    shadow: {blur: 5, color: 'Black'}, shading: 0.25, text_color: 'Maroon', text_hover_color: 'Maroon'
};

function setup() {
    createCanvas(windowWidth, windowHeight);

    //startButton = createButton('click me');
    //startButton.position(0, 100);
    //startButton.style('color:red');
    //startButton.color = 'green';
    //startButton.size(100, 50);
    //startButton.mousePressed(udri);

    // startButton = {
    //     x: 455, y:30, w:150, h: 40, text: 'Button4', corners: [10, 0, 10,0], color: 'rgb(255,192,0)'
    // }
}

function udri() {
    print('+');
}


function draw() {
    button(startButton);

    if (MENU === 0) createMenu();
    else if (MENU == 1) {
        drawV1();
    } else if (MENU == 2) {
        drawV2();
    } else if (MENU == 3) {
        drawV3();
    } else if (MENU == 4) {
        drawV4();
    } else if (MENU == 5) {
        drawV5();
    } else if (MENU == 6) {
        drawV6();
    } else if (MENU == 7) {
        drawV7();
    }
}

function createMenu() {
    background(125);

    fill(0);
    stroke(255);
    let currentButtonX = 50;
    let currentButtonY = 50;
    for (let i = 1; i <= numButtons; i++) {
        rect(currentButtonX, currentButtonY, buttonWidth, buttonHeight);
        currentButtonY = currentButtonY + buttonHeight * 2;

        if (i % numButtonsInCol === 0) {
            currentButtonY = 50;
            currentButtonX += buttonWidth + 50;
        }
    }

    textSize(textDimension);
    fill(255);
    noStroke();

    let currentTextX = 75;
    let currentTextY = 100;
    for (let i = 1; i <= numButtons; i++) {
        text(`Stars V${i}`, currentTextX, currentTextY);
        currentTextY += buttonHeight * 2;

        if (i % numButtonsInCol === 0) {
            currentTextY = 100;
            currentTextX += buttonWidth + 50;
        }
    }
}

function mouseClicked() {
    if (MENU == 0) {
        if (mouseX < 200 && mouseX > 50) checkForButtonY(0);
        else if (mouseX < 400 && mouseX > 250) checkForButtonY(4);
    }
}

function checkForButtonY(number) {
    if (mouseY < 125 && mouseY > 50) {
        MENU = 1 + number;
        print(MENU);
    }
    if (mouseY < 275 && mouseY > 200) {
        MENU = 2 + number;
        print(MENU);
    }
    if (mouseY < 425 && mouseY > 350) {
        MENU = 3 + number;
        print(MENU);
    }
    if (mouseY < 575 && mouseY > 500) {
        MENU = 4 + number;
        print(MENU);
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

// function mousePressed() {
//     if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
//         let fs = fullscreen();
//         fullscreen(!fs);
//     }
// }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (key === 'Enter') {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}

