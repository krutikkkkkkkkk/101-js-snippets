// fetch data from API
let api = "https://jsonplaceholder.typicode.com/posts";
fetch(api)
    .then((response) => response.json())
    .then((data) => console.log(data));

