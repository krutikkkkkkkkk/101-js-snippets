/// convert string to integer
function convertStringToInteger(str) {
    return parseInt(str);
}
console.log(convertStringToInteger("123"));

//convert a array string to an integer
function convertArrayStringToInteger(arr) {
    return arr.map((item) => parseInt(item));
}
console.log(convertArrayStringToInteger(["1", "2", "3"]));