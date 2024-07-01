function drawV7() {
    if (!singleTimeSetUp) {
        print('Mouse Right click to return back to the menu');
        singleTimeSetUp = true;

        let starsAmount = width / 2;
        speed = 30;
        for (let i = 0; i < starsAmount; i++) {
            stars[i] = new StarV7();
            stars[i].speed = speed;
        }
    }

    background(0);
    translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }

    checkForBackToMenu();
}


class StarV7 {
    constructor(x, y, z) {
        this.x = random(-width / 2, width / 2);
        this.y = random(-height / 2, height / 2);
        this.z = random(width);

        this.pz = this.z;
        this.speed = 10;
    }

    update() {
        this.z = this.z - this.speed;
        if (this.z < 1) {
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
            this.z = width;
            this.pz = this.z;
        }
    }
    show() {
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        let r = map(this.z, 0, width, 12, 0);
        //ellipse(sx, sy, r, r);

        let px = map(this.x / this.pz, 0, 1, 0, width);
        let py = map(this.y / this.pz, 0, 1, 0, height);

        this.pz = this.z;
        stroke(255);
        line(px, py, sx, sy);
    }
}
