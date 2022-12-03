/*
As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?
*/

import { readLines } from "https://deno.land/std@0.167.0/io/buffer.ts";

interface Dictionary {
    [index: string]: string;
}

const fileReader = await Deno.open('input3.txt');

let score = 0;
let group : string[] = [];
for await (const line of readLines(fileReader)) {
    group.push(line);

    if (group.length === 3) {
        const dict1 : Dictionary = {};
        const dict2 : Dictionary = {};
        for (const letter of group[0]) {
            dict1[letter] = letter;
        }

        for (const letter of group[1]) {
            if (Object.prototype.hasOwnProperty.call(dict1, letter)) {
                dict2[letter] = letter;
            }
        }

        for (const letter of group[2]) {
            if (Object.prototype.hasOwnProperty.call(dict2, letter)) {
                if (letter === letter.toUpperCase()) {
                    score += letter.charCodeAt(0) - 38;
                } else {
                    score += letter.charCodeAt(0) - 96;
                }
                group = [];
                break;
            }
        }
    }
}

console.log(score);