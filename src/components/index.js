/* eslint-disable */
import React from "react";
import { Form, Input, Button, Checkbox, Layout ,Card} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react"
import '../App.css'


const { Header, Footer, Sider, Content } = Layout;

@inject("store")
@observer
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
    console.log('props',props )
  }

  componentDidMount(){
    const {store} = this.props
    console.log('this.props', this.props?.location?.state)
    console.log('window.location', window.location)
    let user = window.localStorage.getItem('user')
    console.log('user', user)
  }

  render() {
    return (
      <>
        <Layout >
          <Header>Todo</Header>
          <Content>
            <Card >
               <p>Welcome,blablabla</p>
             </Card>
          </Content>
          <Footer>@May 2021</Footer>
        </Layout>
      </>
    );
  }
}

export default Home;
