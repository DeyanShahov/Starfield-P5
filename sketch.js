const textDimension = 25;
const numButtons = 8;
const numButtonsInCol = 4;

let buttonWidth = 150;
let buttonHeight = 75;
let MENU = 0;
let singleTimeSetUp = false;
let stars = [];
let speed;
let buttonsList = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    createMenu();

    startButton = createButton('RETURN');
    startButton.position(5, 2);
    startButton.style('color:black');
    startButton.size(80, 30);
    startButton.mousePressed(backToMenu);

    startButton = createButton('SCREEN');
    startButton.position(85, 2);
    startButton.style('color:black');
    startButton.size(80, 30);
    startButton.mousePressed(fullscreenMode);
}


function draw() {
    if (MENU === 0) loopMenu();
    else if (MENU == 1) drawV1();
    else if (MENU == 2) drawV2();
    else if (MENU == 3) drawV3();
    else if (MENU == 4) drawV4();
    else if (MENU == 5) drawV5();
    else if (MENU == 6) drawV6();
    else if (MENU == 7) drawV7();
    else if (MENU == 8) drawV8();
}

function loopMenu() {
    background(125);

    for (let i = 0; i < buttonsList.length; i++) {
        button(buttonsList[i]);
        if (buttonsList[i].pressed) MENU = i + 1;
    }

}

function createMenu() {
    let currentButtonX = 50;
    let currentButtonY = 50;

    for (let i = 1; i <= numButtons; i++) {
        const tempButton = createCustomButton(currentButtonX, currentButtonY, i);
        buttonsList.push(tempButton);

        currentButtonY = currentButtonY + buttonHeight * 2;

        if (i % numButtonsInCol === 0) {
            currentButtonY = 50;
            currentButtonX += buttonWidth + 50;
        }
    }
}

function checkForBackToMenu() {
    if (mouseButton == RIGHT) backToMenu();
}

function backToMenu() {
    sliderPlanetMass?.remove();
    sliderSunMass?.remove();
    sliderScale?.remove();

    MENU = 0;
    singleTimeSetUp = false;
    stars = [];
    noStroke();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (key === 'Enter') fullscreenMode();

    // For spaceV8 place new planet at mouse location
    if (key === 'a') {
        let mx = (mouseX - width / 2) * 1 / scale; // 'translate' mouseX position
        let my = (mouseY - height / 2) * 1 / scale; // 'translate' mouseY position
        planet = new Planet(mx, my, 5); //place new planet at mx, my, mass = 5
    }
}

function fullscreenMode() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function createCustomButton(currentButtonX, currentButtonY, i) {
    return {
        x: currentButtonX,
        y: currentButtonY,
        text: `Stars V${i}`,
        w: buttonWidth,
        h: buttonHeight,
        corners: [10, 0, 10, 0],
        color: 'rgb(255, 192, 0)',
        hover_color: 'rgb(255,255,0)',
        pressed_color: 'rgb(255,255,128)',
        border_thickness: 3,
        border_color: 'rgb(0,0,0,0.1)',
        border_hover_color: 'rgb(128,0,0,0.1)',
        font: 'Comic Sans MS',
        text_size: 20,
        shading: 1,
        shadow: { blur: 10, color: 'Black', offset_x: 1, offset_y: 4 },
        hover_shadow: { blur: 10, color: 'rgb(128, 0, 0)', offset_x: 1, offset_y: 4 },
        text_shadow: { blur: 3, color: 'White', offset_x: 1, offset_y: 2 },
        text_color: 'Maroon',
        text_hover_color: 'Maroon'
    };
}

