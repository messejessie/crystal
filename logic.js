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

getRandom => (min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}