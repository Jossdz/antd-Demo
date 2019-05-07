import React from "react";
import { Layout, Menu } from "antd";

const {Header, Content, Footer} = Layout

function LayoutComponent(props) {
  return (
    <Layout>
      <Header> 
        <Menu
          theme='dark'
          mode='horizontal'
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>Cursos</Menu.Item>
          <Menu.Item key='2'>Casos de frustración extrema</Menu.Item>
        </Menu>
      </Header>
      <Content>
        {props.children}
      </Content>
      <Footer>
        Ant Design ©2019 Created by Los mejores pinshis Ironhackers
      </Footer>
    </Layout>
  );
}

export default LayoutComponent;
