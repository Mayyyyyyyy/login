const UserSchema = require('../shema/userSchema') 
const mongoose = require('../db/user')

module.exports = mongoose.model('User',UserSchema,'user')
