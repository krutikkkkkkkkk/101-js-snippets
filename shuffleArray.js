// shuffle an array
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray(myArr));
