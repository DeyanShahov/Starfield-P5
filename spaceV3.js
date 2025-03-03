function drawV3() {

  if (!singleTimeSetUp) {
    for (let i = 0; i < 800; i++) {
      stars[i] = new Star();
    }
    print('Mouse Right click to return back to the menu');
    print('Move mouse left / right to change stars speed');
    singleTimeSetUp = true;
  }

  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  checkForBackToMenu();
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    //let colorR = map(speed, 0, width, 5, 30);
    //let colorG = map(speed, 0, width, 255, 222);
    //let colorB = map(speed, 0, width, 255, 222);
    //fill(colorR, colorG, colorB);
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    //colorR = map(mouseX, 0, width, 0, 255);
    //colorG = map(mouseX, 0, width, 0, 255);
    //colorB = map(mouseX, 0, width, 0, 255);
    let strokeNum = map(mouseX, 0, width, 0, 3);

    //stroke(255);
    stroke('turquoise');
    strokeWeight(strokeNum);
    line(px, py, sx, sy);
  }
}