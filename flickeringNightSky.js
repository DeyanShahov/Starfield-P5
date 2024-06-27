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

