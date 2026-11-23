function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                name: "Yash",
                age: 18
            };
            resolve(user);

        }, 2000);
    });
}
getUser()
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });