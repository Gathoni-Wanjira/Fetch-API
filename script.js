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

const data = {
    title: "This is the title",
    body: "This is post body",
    userId: 2
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }

}).then(function (res) {
    return res.json();
}).then(function(data) {
    console.log(data);
})


// FETCH APIs by DEfault use GET methods if you fail to specify.
// For the rest of the methods that's (POST, DELETE,PUT) we get to specify the kind of a method we need to use.
