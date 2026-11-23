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
async function displayUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
displayUser();