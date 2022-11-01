let email = "krutik@infinitylinkage.com"

//validate email using regex
function validateEmailRegex(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
console.log(validateEmailRegex(email));

//validate email using string methods
function validateEmail(email) {
    let atPosition = email.indexOf("@");
    let dotPosition = email.lastIndexOf(".");
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
        return false;
    }
    return true;
}
console.log(validateEmail(email));
