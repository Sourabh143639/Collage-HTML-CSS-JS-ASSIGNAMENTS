let age = 25;
let price;

if (age < 12) {
    price = 5;
}
else if (age >= 12 && age <= 17) {
    price = 10;
}
else if (age >= 18 && age <= 59) {
    price = 20;
}
else {   
    price = 15;
}

console.log("Ticket Price: $" + price);
