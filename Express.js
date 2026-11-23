let express = require("express")
let app = express();
app.use(express.json());
let PORT = 3000;
app.get("/players/:jersey", (req, res) => {
let { jersey } = req.params
res.send(`Player with jersey ${jersey}`)
})
app.get("/players", (req, res) => {
let { team, sort } = req.query
res.send(`Team: ${team}, sorted by: ${sort}`)
})
app.listen(PORT, () => {
console.log(`server is running on ${PORT}...`)
})