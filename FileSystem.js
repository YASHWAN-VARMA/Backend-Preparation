let fs = require("fs")
console.log("A")
fs.readFile("marks.txt", "utf8", (err, data) => {
console.log("B")
})
console.log("C")