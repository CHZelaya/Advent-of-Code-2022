import { readFile } from 'fs';

readFile('./puzzle-input', (err, data) => {
    if (err) {
        console.log('errrrrrorrrr')
    }
    console.log(data.toString('utf8'));
})


// * Find the elf carrying the most calories.
// * Spaces between the lines indicate a different elves inventory.

//Todo: Create an app that can distinguish between the different inventories carried by the elves, sum their total and figure out which one is carrying the most energy.
//Todo Step 1: Distinguish between the inventories.
//Todo Step 2: Add the total calories per inventory.
//Todo Step 3: Declare which elf is carrying the most energy.