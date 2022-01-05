const express = require('express')
const router = express.Router()
//const userModel = require('../model/userModel')
const LoginActions = require('../actions/loginAction')
const request = require('request')

let loginService = new LoginActions()

router.post('/login',async(req,res)=>{
   request('http://localhost:5000',async()=>{
     await loginService.validateUser(req,res)
   })
})

router.get('/home',async(req,res)=>{
   res.send('welcome home')
})

module.exports = router

