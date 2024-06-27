function drawV2() {
    background(30);

    if (!singleTimeSetUp) {
        for (let i = 0; i < 1000; i++) {
            stars[i] = new StarV2();
        }
        print('Mouse Right click to return back to the menu');
        singleTimeSetUp = true;
    }
 
    stars.forEach(star => {
        star.show();
    });

    checkForBackToMenu();
}

class StarV2 {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(0.25, 3);
        this.t = random(TAU);
        // this.r = random(255);
        // this.g = random(255);
        // this.b = random(255);
        // this.a = random(255);
    }

    show() {
        this.t += 0.02; // flickering frequency
        let scale = this.size + sin(this.t) * 2;
        //fill(this.r, this.g, this.b, this.a);
        noStroke();
        ellipse(this.x, this.y, scale, scale);
    }
}