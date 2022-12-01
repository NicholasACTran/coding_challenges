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