// check number is an Armstrong number or not

function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        return true;
    }
    return false;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(154));

// check number is an Armstrong number or not using for loop

function isArmstrongNum(number) {
    //check if number is string
    if (typeof number === "number") {
        //convert number to string
        number = number.toString();
    }
    let sum = 0;
    number.split("").forEach((digit) => {
        sum += digit * digit * digit;
    });
    if (sum == number) {
        return true;
    }
    return false;
}

console.log(isArmstrongNum(153));

