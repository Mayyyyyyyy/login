/* eslint-disable */
import React from "react";
import { Form, Input, Button, Checkbox, Layout ,Card} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { observer, inject } from "mobx-react"
import Style from './components.less'
import '../App.css'

const { Header, Footer, Sider, Content } = Layout;

@inject("store")
@observer
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  componentDidMount(){
    const {store} = this.props
    console.log('store',store )
  }

  render() {
    return (
      <>
        <Layout >
          <Header>Todo</Header>
          <Content>
            <Card className={Style.form}>
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
