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

checkWin = () => {
    //check if current score is larger than target score
    if (currentScore > targetScore) {
        alert('You Lose!')
        console.log('You Lose')
        //loss count
        lossCount++;
        //html
        $('#loss-count').text(lossCount);
        //restart
        startGame();
    } else if (currentScore === targetScore) {
        alert('You Win');
        console.log('you win')
        //counter 
        winCount++
        //html
        $('#win-count').text(winCount);
        //restart
        startGame();
    }


};

//getting Crystals to respond
addValues = (clickedCrystal) => {
    //change currentScore
    currentScore += clickedCrystal.value;
    // html to reflect current score 
    $('#your-score').text(currentScore);

    //check the win
    checkWin();

    // test
    console.log('Your Score: '+ currentScore);
};

//Main Start: 
//call start Game: 
startGame();

//add the values to the crystals. 
$("#blue").click(function() {
    addValues(crystal.blue);
  });
  
  $("#red").click(function() {
    addValues(crystal.red);
  });
  
  $("#green").click(function() {
    addValues(crystal.green);
  });
  
  $("#yellow").click(function() {
    addValues(crystal.yellow);
  });
  

