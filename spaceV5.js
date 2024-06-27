

function drawV5() {
    if (!singleTimeSetUp) {
        print('Mouse Right click to return back to the menu');
        singleTimeSetUp = true;

        smooth();
        stroke(255);
        strokeWeight(5);

        // Init all stars
        for (let i = 0; i < 50; i++)
        stars[i] = new StarV3();
    }

    background(0);

    // Draw all stars wrt center of screen
    translate(0.5 * width, 0.5 * height);

    // Update and draw all stars
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
    }

    checkForBackToMenu();
}

class StarV3 {
    
    constructor() {
        this.x = random(-5000, 5000);
        this.y = random(-5000, 5000);
        this.z = random(0, 2000);
    }

    update() {
        this.z -= 10;      // Move star closer to viewport
        if (this.z <= 0.0) this.reset();// Reset star if it passes viewport
    }

    reset() {
        // Reset star to a position far away
        this.x = random(-5000, 5000);
        this.y = random(-5000, 5000);
        this.z = 2000.0;
    }

    draw() {
        // Project star only viewport
        let offsetX = 100.0 * (this.x / this.z);
        let offsetY = 100.0 * (this.y / this.z);
        let scaleZ = 0.0008 * (2000.0 - this.z);

        // Draw this star
        //pushMatrix();
        //translate(offsetX, offsetY);
        scale(scaleZ);
        ellipse(0, 0, 20, 20);
        //popMatrix();
    }
}


