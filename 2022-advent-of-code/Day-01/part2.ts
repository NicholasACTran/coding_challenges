/*
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

import { readLines } from "https://deno.land/std@0.167.0/io/buffer.ts";

const fileReader = await Deno.open('input1.txt');

// This uses a brute force comparison since the k of "top k values" is low
// and the number of numbers being compared is low. Would require a heap
// to scale.
const top3Max : number[] = [];
let currentCalories= 0;

for await (const line of readLines(fileReader)) {
    if (line === '\n' || line === '\r\n' || line === '') {
        if (top3Max.length < 3) top3Max.push(currentCalories);
        else {
            const min = Math.min(...top3Max);
            if (currentCalories > min) {
                const index = top3Max.findIndex(e => e === min);
                top3Max[index] = currentCalories;
            }
        }
        currentCalories = 0;
    } else {
        currentCalories += Number(line);
    }
}

const sum = top3Max.reduce((partialSum, a) => partialSum + a, 0);

console.log(sum);