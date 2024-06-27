function drawV4() {
    if (!singleTimeSetUp) {
        for (let i = 0; i < 500; i++) {
          stars.push(new StarV2());
        }
        print('Mouse Right click to return back to the menu');
        print('Press button Up / Down / Left / Right to move star in this direction');
        singleTimeSetUp = true;
    }

    background(0);

    for (const star of stars) {
        star.update();
        star.show();
    }

    checkForBackToMenu();
}