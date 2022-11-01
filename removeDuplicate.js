// remove duplicate elements from an array
function removeDuplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
    }

console.log(removeDuplicate([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10]));


// remove duplicate elements from an array using Set
function removeDuplicateElementsFromArrayUsingSet(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicateElementsFromArrayUsingSet(myArr));
