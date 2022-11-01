// password validation length 8, at least one letter and one number and one special character

function passwordValidation(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

console.log(passwordValidation('Abcdefgh1@'));
console.log(passwordValidation('Abcdefgh1'));
console.log(passwordValidation('Abcdefgh'));

