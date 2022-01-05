const mongoose = require('../db/user')

let UserSchema = mongoose.Schema({
  username:String,
  password:String
})

module.exports = UserSchema