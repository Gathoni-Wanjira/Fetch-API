console.log("Hello");

fetch("https://jsonplaceholder.typicode.com/users")
// get method.
    .then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
    })
// JSON is a format that allows you to see data from an API.

// Post Method.