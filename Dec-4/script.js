import { readFileSync } from 'fs';

const puzzle = readFileSync('./practice-puzzle.txt', 'utf-8');

const puzzlePairs = puzzle.split('\n')
    .map(pairs => pairs.split(','))

console.log(puzzlePairs)






