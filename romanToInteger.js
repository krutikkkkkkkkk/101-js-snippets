// convert roman to integer

function romanToInteger(roman) {
    var romanNumeral = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var result = 0;
    for (var i = 0; i < roman.length; i++) {
        if (romanNumeral[roman[i]] < romanNumeral[roman[i + 1]]) {
            result -= romanNumeral[roman[i]];
        } else {
            result += romanNumeral[roman[i]];
        }
    }
    return result;
}

console.log(romanToInteger("CMLXVIII"));
