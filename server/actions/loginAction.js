/* eslint-disable */
const userModel = require('../model/userModel')

class LoginActions {
   validateUser(req,res){
    // console.log('req', req)
    console.log('req.query', req.query)
    console.log('req.params', req.params)
    console.log('req.body', req.body)
    const {username,password} = req.body
    userModel.find({},(err,doc)=>{
      if(err){
        throw err
      }
      console.log('doc',doc )
      let isSigned = doc.some(item=>item.username == username && item.password == password)
      res.json({
        // message: res.data.message,
        success: true,
        results: isSigned&&username
      })
    })
   } 
   userRegister(req,res){
    console.log('req.body', req.body)
    const {username,password} = req.body
    userModel.find({},(err,doc)=>{
      if(err){
        throw err
      }
      console.log('doc',doc )
      let isSigned = doc.some(item=>item.username == username && item.password == password)
      if(isSigned){
        res.json({
          message: 'registed',
          // success: true,
          // results: isSigned&&username
        }) 
        return
      }else{
        let userModelInstance = new userModel({
          username,
          password
        })
        userModelInstance.save((err)=>{
          if(err){
            throw err
          }
          console.log('save successfully', )
          res.json({
            // message: res.data.message,
            success: true,
          })
          return
        })
      }
    })
   }
}

module.exports = LoginActions


