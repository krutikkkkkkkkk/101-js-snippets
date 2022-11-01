// generate random number between 0 and given number

let max = 100;
function randomNumberGenerator(max) {
    return Math.floor(Math.random() * max);
}

console.log(randomNumberGenerator(max));
