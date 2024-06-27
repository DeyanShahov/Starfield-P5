class StarV2 {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(0.25, 3);
        this.t = random(TAU);
        this.speed = random(1, 3);
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

    update(directionToMove, autoSpeed) {
        if (keyIsPressed === true) {
            if (key === 'ArrowUp') {
                // move stars up
                this.y -= this.speed;
                if (this.y < -this.size) {
                    this.x = random(width);
                    this.y = height + this.size;
                }
            } else if (key === 'ArrowDown') {
                // move stars down
                this.y += this.speed;
                if (this.y > height) {
                    this.x = random(width);
                    this.y = this.size;
                }
            } else if (key === 'ArrowLeft') {
                // move stars to the left
                this.x -= this.speed;
                if (this.x < -this.size) {
                    this.x = width + this.size;
                    this.y = random(height);
                }
            } else if (key === 'ArrowRight') {
                // move stars to the right
                this.x += this.speed;
                if (this.x > width) {
                    this.x = this.size;
                    this.y = random(height);
                }
            }
        }

        if (directionToMove === 'up') {
            this.y -= autoSpeed;
            if (this.y < -this.size) {
                this.x = random(width);
                this.y = height + this.size;
            }
        } else if (directionToMove === 'down') {
            // move stars down
            this.y += autoSpeed;
            if (this.y > height) {
                this.x = random(width);
                this.y = this.size;
            }
        } else if (directionToMove === 'left') {
            // move stars to the left
            this.x -= autoSpeed;
            if (this.x < -this.size) {
                this.x = width + this.size;
                this.y = random(height);
            }
        } else if (directionToMove === 'right') {
            // move stars to the right
            this.x += autoSpeed;
            if (this.x > width) {
                this.x = this.size;
                this.y = random(height);
            }
        }

    }
}