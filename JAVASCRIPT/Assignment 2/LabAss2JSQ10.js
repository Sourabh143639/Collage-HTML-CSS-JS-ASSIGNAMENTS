let num = 8;
let factorial = 1;
let i = 1;

do {
    factorial = factorial * i;
    i++;
} while (i <= num);

console.log("Factorial =", factorial);
