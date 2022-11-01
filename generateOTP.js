// generate OTP of given length

function generateOTP(length) {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

console.log(generateOTP(6));