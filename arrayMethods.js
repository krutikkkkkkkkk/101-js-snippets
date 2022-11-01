let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//count the number of elements in an array
function countNumberOfElementsInArray(arr) {
    return arr.length;
}
console.log(countNumberOfElementsInArray(myArr));

//get the sum of all numbers in an array
function getSumOfArray(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(getSumOfArray(myArr));

//get the sum of all even numbers in an array
function getSumOfEvenNumbers(arr) {
    return arr.filter((item) => item % 2 === 0).reduce((a, b) => a + b);
}
console.log(getSumOfEvenNumbers(myArr));

//get the sum of all odd numbers in an array
function getSumOfOddNumbers(arr) {
    return arr.filter((item) => item % 2 !== 0).reduce((a, b) => a + b);
}
console.log(getSumOfOddNumbers(myArr));

//get the sum of all numbers in an array using recursion
function getSumOfArrayUsingRecursion(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + getSumOfArrayUsingRecursion(arr.slice(1));
}
console.log(getSumOfArrayUsingRecursion(myArr));

// append an element to the end of an array
function appendElementToEndOfArray(arr, element) {
    return arr.push(element);
}
console.log(appendElementToEndOfArray(myArr, 11));

// append an element to the beginning of an array
function appendElementToBeginningOfArray(arr, element) {
    return arr.unshift(element);
}
console.log(appendElementToBeginningOfArray(myArr, 0));

// remove an element from the end of an array
function removeElementFromEndOfArray(arr) {
    return arr.pop();
}
console.log(removeElementFromEndOfArray(myArr));

// remove an element from the beginning of an array
function removeElementFromBeginningOfArray(arr) {
    return arr.shift();
}
console.log(removeElementFromBeginningOfArray(myArr));

// remove an element from the middle of an array
function removeElementFromMiddleOfArray(arr, index) {
    return arr.splice(index, 1);
}
console.log(removeElementFromMiddleOfArray(myArr, 5));

// reduce an array to a single value
function reduceArrayToSingleValue(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(reduceArrayToSingleValue(myArr));

// map an array to a new array
function mapArrayToNewArray(arr) {
    return arr.map((item) => item * 2);
}
console.log(mapArrayToNewArray(myArr));

// filter an array to a new array
function filterArrayToNewArray(arr) {
    return arr.filter((item) => item % 2 === 0);
}
console.log(filterArrayToNewArray(myArr));

// sort an array
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray(myArr));

// reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(myArr));

// find the maximum value in an array
function findMaximumValueInArray(arr) {
    return Math.max(...arr);
}
console.log(findMaximumValueInArray(myArr));

// find the minimum value in an array
function findMinimumValueInArray(arr) {
    return Math.min(...arr);
}
console.log(findMinimumValueInArray(myArr));
