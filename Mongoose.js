let mongoose = require("mongoose")
let userSchema = new mongoose.Schema({
name: String,
email: { type: String, unique: true },
passWord: String, 
role: { type: String, default: "user" }, 
resetToken: String,
resetTokenExpiry: Number, 
})
let User = mongoose.model("User", userSchema)
module.exports = User /
require("./db/db.js")