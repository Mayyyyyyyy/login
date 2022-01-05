/* eslint-disable */
import request from "./request"

class Loginpage {
  login(params){
    return request.post('/login',{params:params})
  }
}

export default Loginpage