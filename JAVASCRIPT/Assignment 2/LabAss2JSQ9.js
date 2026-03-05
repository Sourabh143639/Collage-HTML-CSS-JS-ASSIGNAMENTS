let dice;

do {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log("Rolled:", dice);
} while (dice !== 6);

console.log("You hit 6!");
