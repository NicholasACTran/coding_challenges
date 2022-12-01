import { readLines } from "https://deno.land/std@0.167.0/io/buffer.ts";

const fileReader = await Deno.open('input1.txt');

let max = 0;
let currentCalories= 0;

for await (const line of readLines(fileReader)) {
    if (line === '\n' || line === '\r\n' || line === '') {
        max = max > currentCalories ? max : currentCalories;
        currentCalories = 0;
    } else {
        currentCalories += Number(line);
    }
}

console.log(max);