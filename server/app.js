const express = require('express')
require('./db/user')
const app = express()
const Login = require('./routes/login')
const config = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/', Login)

app.listen(config.port,(err)=>{
  if(err){
    throw err
  }
  
  console.log('server is running' )
})

