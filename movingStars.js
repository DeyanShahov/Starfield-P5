let timerValue = 5;
let newDirection = 'up';
let autoMoveSpeed = 0.5;

function drawV4() {
    if (!singleTimeSetUp) {
        for (let i = 0; i < 500; i++) {
            stars.push(new StarV2());
        }
        print('Mouse Right click to return back to the menu');
        print('Press button Up / Down / Left / Right to move star in this direction');
        singleTimeSetUp = true;

        setInterval(timeIt, 1000);
    }

    background(0);

   
    if (timerValue <= 0) {
        newDirection = random(['up', 'down', 'left', 'right']);
        autoMoveSpeed = random(0.1, 0.5);
        timerValue = 5;
        print(newDirection);
    }

    for (const star of stars) {
        star.update(newDirection, autoMoveSpeed);
        star.show();
    }

    checkForBackToMenu();
}


function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}