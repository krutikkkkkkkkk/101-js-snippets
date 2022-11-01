// generate password of given length and complexity (uppercase, lowercase, numbers, symbols)

function generatePassword(length, complexity) {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";
    let all = "";

    if (complexity == 1) { // only lowercase
        all = lowercase;
    } else if (complexity == 2) { // lowercase + uppercase;
        all = lowercase + uppercase;
    } else if (complexity == 3) { //lowercase + uppercase + numbers;
        all = lowercase + uppercase + numbers;
    } else if (complexity == 4) { //lowercase + uppercase + numbers + symbols;
        all = lowercase + uppercase + numbers + symbols;
    }
    for (let i = 0; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    return password;
}

console.log(generatePassword(10, 4));
