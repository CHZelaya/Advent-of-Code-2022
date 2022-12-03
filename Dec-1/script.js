import { readFileSync } from 'fs';

const puzzle = readFileSync('./puzzle-input.txt', 'utf8')
let sortedInventory = puzzle.toString().split('\r\n');



const checkInventory = (sortedInventory) => {
    let arrayLength = sortedInventory.length;
    let backPack = [];
    let caloriesPerBag = 0;
    let actualCalories = 0;

    for (let i = 0; i < arrayLength; i++) {
        actualCalories = Number(sortedInventory.pop());
        caloriesPerBag = caloriesPerBag + actualCalories;
        if (actualCalories === 0) {
            backPack.push(caloriesPerBag);
            caloriesPerBag = 0;
        }
    }
    caloriesPerBag = 0;
    console.log(backPack)
    backPack.sort((a, b) => a - b)
    return console.log(backPack[backPack.length - 1]);



}

checkInventory(sortedInventory)

// * Find the elf carrying the most calories.
// * Spaces between the lines indicate a different elves inventory.

//Todo: Create an app that can distinguish between the different inventories carried by the elves, sum their total and figure out which one is carrying the most energy.
//Todo Step 1: Distinguish between the inventories.
//Todo Step 2: Add the total calories per inventory, into a new array.
//Todo ForEach array add all values and print to new array
//Todo Step 3: Iterate through new arrays and find biggest number value, via if statement

