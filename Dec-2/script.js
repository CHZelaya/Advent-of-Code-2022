import { readFileSync } from 'fs';

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
//? Step 1: Write a function that takes two arguments, opponents hand and my hand
//? Step 2: Compare the two arguments against each other and return win/loss/draw

const puzzle = readFileSync('./puzzle-input.txt', 'utf8').toString().split('\r\n');

const gameOn = (puzzle) => {
    console.log(puzzle);
    let puzzleLength = puzzle.length
    console.log('Puzzle Length in Function Scope:', puzzleLength);
    for (let i = 0; i < puzzleLength; i++) {

    }
}

gameOn(puzzle);





