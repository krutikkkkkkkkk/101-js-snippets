let url = "https://infinitylinkage.com"

//validate url using regex
function validateUrlRegex(url) {
    let regex = /^(http|https):\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    return regex.test(url);
}
console.log(validateUrlRegex(url));

//get data from url
function getDataFromUrl(url) {
    let data = new URL(url);
    return data;
}
console.log(getDataFromUrl(url));