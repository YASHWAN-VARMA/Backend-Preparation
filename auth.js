let auth = (req, res, next) => {
let token = req.headers.authorization
if (!token) {
return res.status(401).send("Please login first")
}
try {
let decode = jwt.verify(token, "secretKey")
req.user = decode
next()
} catch (err) {
return res.status(401).send("Invalid or expired token")
}
}
let roleCheck = (role) => {
return (req, res, next) => {
if (req.user.role !== role) {
return res.status(403).send("Access denied")
}
next()
}
}
app.get("/admin", auth, roleCheck("admin"), (req, res) => {
res.send("hello only admin can access me!")
})