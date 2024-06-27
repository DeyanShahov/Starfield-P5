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