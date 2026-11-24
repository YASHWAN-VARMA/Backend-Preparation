app.post("/signUp", async (req, res) => {
let { name, email, passWord, role } = req.body
let findData = await User.findOne({ email })
if (findData) {
return res.send("User already exists")
}
let updatedP = await bcryptjs.hash(passWord, 10)
let UserInfo = new User({
name,
email,
passWord: updatedP,
role: role || "user",
})
await UserInfo.save()
res.status(201).send("Signup done")
})