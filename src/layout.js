import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.min.css"
import "./index.css"
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

// let routerList = {
//   chart: "chart",
//   user: "user",
//   exampleLifeCycle: "exampleLifeCycle"

// }

class Mainbox extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div className='main'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            {/* <div className="logo" /> */}
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1"><Link to="chart" ><Icon type="pie-chart" /><span>chart</span></Link></Menu.Item>
              <Menu.Item key="2"><Link to="user" ><Icon type="user" /><span>user</span></Link></Menu.Item>
              <Menu.Item key="3"><Link to="login" ><Icon type="desktop" /><span>login</span></Link></Menu.Item>
              <Menu.Item key="4"><Link to="lifecycle" ><Icon type="desktop" /><span>life cycle</span></Link></Menu.Item>
              <Menu.Item key="5"><Link to="examplelifecycle" ><Icon type="desktop" /><span>Example life_cycle</span></Link></Menu.Item>
              <Menu.Item key=""><Link to="localeSample" ><Icon type="desktop" /><span>Locale Sample</span></Link></Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
          
        </Layout>
      </div>
    );
  }
}

export default Mainbox;