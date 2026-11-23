function getUser(callback) {
    setTimeout(() => {
        const user = {
            name: "Yash",
            age: 18
        };

        callback(user);
    }, 2000);
}
function displayUser(user) {
    console.log(user);
}
getUser(displayUser);