let sliderPlanetMass;
let sliderSunMass;
let sliderScale;

let planet, scale, sun;

function drawV8() {
    if (!singleTimeSetUp) {
        print('Mouse Right click to return back to the menu');
        singleTimeSetUp = true;

        // Create palnet mass slider
        sliderPlanetMass = createSlider(1, 100, 5, 1); 
        sliderPlanetMass.position(10, 50);
        sliderPlanetMass.style("width", '100px'); // set slider to 100 pixel wide

        // Create sun masss slider
        sliderSunMass = createSlider(1, 100, 20, 1);
        sliderSunMass.position(110, 50);
        sliderSunMass.style("width", '100px');

        // Create scale slider
        sliderScale = createSlider(0.001, 2, 1, 0.01);
        sliderScale.position(10, 530);
        sliderScale.style("width", '100px');

        planet = new Planet(100, 100, 5);
        sun = new Sun(0, 0, 20);
    }

    background(0);
    translate(width / 2, height / 2); // move origin to middle of canvas (x=0, y=0 is origin)

    // Get slider values to change sun and planet size
    planet.mass = sliderPlanetMass.value();
    textSize(20);
    text('Planet Mass: ' + planet.mass, -340, -240);

    sun.mass = sliderSunMass.value();
    text('Sun Mass: ' + sun.mass, -160, -240);

    scale = sliderScale.value();
    text('Scale: ' + scale, -340, 220);

    planet.update();
    planet.show();

    sun.attract(planet);
    sun.show();

}


class Planet {
    constructor(x, y, mass) {
        this.pos = createVector(x, y); // Create p5 vector using distance and angle from origin x, y
        this.vel = p5.Vector.random2D(); // Set planet velocity to random direction of unit vector (magnitute / length = 1)
        this.vel.mult(5); // Multiplay velocity by 5
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.color = [random(255), random(255), random(255)];
    }

    update() {
        this.vel.add(this.acc); // this.vel = this.vel + this.acc
        this.pos.add(this.vel); // this.pos = this.pos + this.vel  for x and y
        this.acc.set(0, 0); // Set acceleration to 0 for recalculation
    }

    show() {
        stroke('white');
        strokeWeight(2);
        fill(this.color);
        this.r = sqrt(this.mass) * 10 * scale;
        ellipse(this.pos.x * scale, this.pos.y * scale, this.r * 2 * scale);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass); // F = m * a then acceleration = force divided by mass
        this.acc.add(f); 
    }
}

class Sun {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m; // Set mass of sun object
    }

    show() {
        noStroke();
        fill('yellow');
        this.r = sqrt(this.mass) * 10 * scale; // Update radius from sun mass slider
        ellipse(this.pos.x * scale, this.pos.y * scale, this.r * 2 * scale);
    }

    // Calculate force of gravity
    attract(planet) {
        let force = p5.Vector.sub(this.pos, planet.pos); // Find distance btw sun and planet by subtact

        // Square dist is magnitude of vairavle force squared, constrain value between 25 and 2500
        let distanceSq = constrain(force.magSq(), 25, 2500);

        const G = 10; // Gravitational constant
        let strength = G * (this.mass * planet.mass) / distanceSq; // Calculate force of gravity

        force.setMag(strength); // Set magnitude of force to variable strength
        planet.applyForce(force); // Run function applyForce in planet to apply force of gravity
    }
}