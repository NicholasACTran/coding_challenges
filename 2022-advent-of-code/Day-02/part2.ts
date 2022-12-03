/*
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
*/

import { readLines } from "https://deno.land/std@0.167.0/io/buffer.ts";

const fileReader = await Deno.open('input2.txt');

let score = 0;
for await (const line of readLines(fileReader)) {
    switch(line) {
        case 'A X':
            score += 3;
            break;
        case 'A Y':
            score += 4;
            break;
        case 'A Z':
            score += 8;
            break;
        case 'B X':
            score += 1;
            break;
        case 'B Y':
            score += 5;
            break;
        case 'B Z':
            score += 9;
            break;
        case 'C X':
            score += 2;
            break;
        case 'C Y':
            score += 6;
            break;
        case 'C Z':
            score += 7;
            break;
    }
}

console.log(score);