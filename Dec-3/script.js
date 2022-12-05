import { readFileSync } from 'fs';

const puzzle = readFileSync('./puzzle-input.txt', 'utf-8');
const rucksack = puzzle.split('\n')

const getCommonLetters = (letters) => {
    // console.log(letters)
    if (letters === letters.toUpperCase()) {
        return Number(letters.charCodeAt(0) - 38)
    } else {
        return Number(letters.charCodeAt(0) - 96)
    }
}

const createCompartments = rucksack.map(pockets => {
    let first = pockets.slice(0, pockets.length / 2).split('')
    let second = pockets.slice(pockets.length / 2).split('')
    return getCommonLetters(first.filter(e => second.includes(e))[0])

})

const solvePuzzle = createCompartments.reduce((acc, curr) => acc + curr)

console.log(`The answer is: ${solvePuzzle}`)



