// bubble sort in JavaScript

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let tmp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

//array before sort
let myArr = [3,5,1,2,4,6,7,8,9,10];
console.log("Before Sort: " + myArr);
bubbleSort(myArr)
console.log("After Sort: " + myArr);
