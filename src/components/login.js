/* eslint-disable */
import React from "react";
import { Form, Input, Button, Checkbox, Layout ,Card} from "antd";
import { Link , Navigate } from "react-router-dom"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react"
import Style from './components.less'
import '../App.css'
// import Loginpage from '../utils'
import request from "../request"

const { Header, Footer, Sider, Content } = Layout;


class Log extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:''
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

  submitData = async()=>{
    const {username,password} = this.state
    let params={
       username,
       password
    }
    try{
      let result = await request.post('/login',{...params})
      console.log('result',result )
      if(result.data.success){
        <Navigate to="/home" />
      }
    }catch(err){
       console.log('err', err)
    }
  }
  render() {
    return (
      <>
        <Layout >
          <Header>Todo</Header>
          <Content>
            <Card className={Style.form}>
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
                    onClick={()=>this.submitData()}
                  >
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </Form.Item>
              </Form>
             </Card>
          </Content>
          <Footer>@May 2021</Footer>
        </Layout>
      </>
    );
  }
}

export default Log;
