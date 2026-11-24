app.post("/login", async (req, res) => {
let { email, passWord } = req.body
let findData = await User.findOne({ email })
if (!findData) {
return res.send("User not found")
}
let validP = await bcryptjs.compare(passWord, findData.passWord)
if (!validP) {
return res.send("Wrong password")
}
let token = jwt.sign(
{ id: findData._id, email: findData.email, role: findData.role },
"secretKey"
)
res.json({ msg: "done", token: token })
})