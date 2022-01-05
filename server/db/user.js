const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(`${config.dbUrl}`,(err)=>{
   if(err){
     throw err
   }
   console.log('connect db successfully')
})


module.exports = mongoose