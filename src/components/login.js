/* eslint-disable */
import React from "react";
import { Form, Input, Button, Checkbox, Layout ,Card,message} from "antd";
import { Link , Navigate,Redirect } from "react-router-dom"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react"
import '../App.css'
// import Loginpage from '../utils'
import request from "../request"
import Home from './index'

const { Header, Footer, Sider, Content } = Layout;


class Log extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      redirect:false,
      user:''
    }
  }

  componentDidMount(){
    const {store} = this.props
    console.log('store',store )
  }

  getInputValue = async(v,type)=>{
    console.log('v', v.target.value)
    switch(type){
      case 'username':
        await this.setState({
          username:v.target.value
        })
        break
      case 'password':
        await this.setState({
          password:v.target.value
        })
        break
    }
  }

  submitData = async(type)=>{
    const {username,password} = this.state
    let params={
       username,
       password
    }
    if(type=='signIn'){
      try{
        let result = await request.post('/login',{...params})
        console.log('result',result )
        if(result.data.results){
          this.setState({
            redirect:true,
          })
          window.localStorage.setItem('user',JSON.stringify(result.data.results))
        }else{
         return message.info('please sign up')
        }
      }catch(err){
         console.log('err', err)
      }
    }else{
      try{
        let result = await request.post('/register',{...params})
        console.log('result',result )
        if(result.data.success){
          this.setState({
            redirect:true
          })
        }else if(result.data.message == 'registed'){
          console.log('result',result )
         return message.info('you have registed, please sign in')
        }
      }catch(err){
         console.log('err', err)
      }
    }
  }
  render() {
    if(!this.state.redirect){
      return (
        <>
          <Layout >
            <Header>Todo</Header>
            <Content>
              <Card >
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                      onChange={(v,type)=>this.getInputValue(v,'username')}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      onChange={(v,type)=>this.getInputValue(v,'password')}
                    />
                  </Form.Item>
  
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={()=>this.submitData('signIn')}
                    >
                      Sign in
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={()=>this.submitData('signUp')}
                      style={{marginLeft:'10px'}}
                    >
                      Sign up
                    </Button>
                  </Form.Item>
                </Form>
               </Card>
            </Content>
            <Footer>@May 2021</Footer>
          </Layout>
        </>
      );
    }else{
      return <Navigate  to='/home' replace={true} state={{user:this.state.user}} />
    }
  }
}

export default Log;
