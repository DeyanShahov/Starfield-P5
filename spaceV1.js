let x, y, size1;

function drawV1() {
    if (!singleTimeSetUp) {
        print('Mouse Right click to return back to the menu');
        singleTimeSetUp = true;
    }
    
    background(0, 0, 35, 25);
    x = random(width);
    y = random(height);
    size1 = random(1, 6);

    ellipse(mouseX, mouseY, size1, size1);
    ellipse(x, y, size1, size1);

    checkForBackToMenu();
}