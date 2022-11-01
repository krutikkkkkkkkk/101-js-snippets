// replace a string with another string

function replaceInString(str, find, replace) {
    return str.replace(find, replace);
}
console.log(replaceInString("Hello World", "World", "Krutik"));

// replace a string with another string in a array

function replaceInArrayString(arr, find, replace) {
    return arr.map((item) => item.replace(find, replace));
}
console.log(replaceInArrayString(["Hello World", "Hello World"], "World", "Krutik"));
