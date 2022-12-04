import { readFileSync } from 'fs';


//! LESSON LEARNED TODAY - FOLLOW YOUR INITIAL INSTINCTS

//? Opponents hand
//* A = Rock 
//* B = Paper 
//* C = Scissors 

//? My hand
//* X = Rock
//* Y = Paper
//* Z = Scissors

//? Values
//* Rock = 1
//* Paper = 2
//* Scissors = 3

//Todo_________________________
//? Step 1: Build an object that holds the values of each playable hand and its values.
//? Step 1: Write a function that takes two arguments, opponents hand and my hand
//? Step 2: Compare the two arguments against each other and return win/loss/draw





let score = []

const playGame = (array, score) => {

    const [opponentsMove, myMove] = array

    if (opponentsMove === "A") {
        switch (myMove) {
            case "X":
                return score.push(4)
                console.log('draw');
                break;
            case "Y":
                return score.push(8)
                console.log("win");
                break;
            case "Z":
                return score.push(3)
                console.log('loss');
                break;
            default: console.log(`I'm working`)
        }
    }
    if (opponentsMove === "B") {
        switch (myMove) {
            case "X":
                return score.push(1)
                console.log('loss');
                break;
            case "Y":
                return score.push(5)
                console.log("draw");
                break;
            case "Z":
                return score.push(9)
                console.log('win');
                break;
            default: console.log(`I'm working`)
        }
    }
    if (opponentsMove === "C") {
        switch (myMove) {
            case "X":
                return score.push(7)
                console.log('win');
                break;
            case "Y":
                return score.push(2)
                console.log("lose");
                break;
            case "Z":
                return score.push(6)
                console.log('draw');
                break;
            default: console.log(`I'm working`)
        }
    }

    return score;

}






const puzzle = readFileSync('./puzzle-input.txt', 'utf8');
const array = puzzle.split('\r\n')
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const subArray = element.split(' ')
    playGame(subArray, score)
}

let addScore = score.reduce((sum, a) =>
    sum + a, 0)
console.log(addScore)
console.log(score)