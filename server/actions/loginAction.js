/* eslint-disable */
const userModel = require('../model/userModel')

class LoginActions {
   validateUser(req,res){
    // console.log('req', req)
    console.log('req.query', req.query)
    console.log('req.params', req.params)
    console.log('req.body', req.body)
    userModel.find({},(err,doc)=>{
      if(err){
        throw err
      }
      // res.send(`${doc[0].password}`)
      // console.log('res', res)
      res.json({
        // message: res.data.message,
        success: true,
        results: doc[0].username
      })
      // if( req.body.username === doc[0].username ){
      //   res.redirect(302,`/home`)
      // }
    })
 }
}

module.exports = LoginActions


