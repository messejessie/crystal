let crystal = {
    blue: {
        name: 'Blue',
        value: 0
    },
    green: {
        name: 'Green',
        value: 0
    },
    red: {
        name: 'Red',
        value: 0
    },
    yellow: {
        name: 'Yellow',
        value: 0
    }

};

//Scores:

let currentScore = 0;
let targetScore = 0;

//Wins and Losses

let winCount = 0;
let lossCount = 0;

//functionality 

getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Start and Restart of game: 
startGame = () => {
    //current Score
    currentScore = 0

    //target score
    targetScore = getRandom(19, 120);

    //set values
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    //HTML changes: 
    $('#your-score').text(currentScore);
    $('#target-score').text(targetScore);

    // testing 
    console.log("--------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
        " | Yellow: " + crystal.yellow.value);

    console.log("--------------------");
};

//check win

checkwin = () => {
    //check if current score is larger than target score
    if (currentScore > targetScore) {
        alert('You Lose!')
        console.log('You Lose')
        $('#loss-count').text(lossCount);
        //restart
        startGame();
    }


}
