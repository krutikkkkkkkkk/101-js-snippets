// ternary operator in JavaScript
// ternary operator is a shorthand for if-else statement
// syntax: condition ? expr1 : expr2

let a = 10;
let b = 20;

// if-else statement
if (a > b) {
    console.log('a is greater than b');
}
else {
    console.log('b is greater than a');
}

// ternary operator
a > b ? console.log('a is greater than b') : console.log('b is greater than a');


// ternary operator with if-else statement and assignment operator
let result = a > b ? 'a is greater than b' : a < b ? 'b is greater than a' : 'a is equal to b';
console.log(result);