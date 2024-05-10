import React, { useState } from 'react';
import { Heading, Img, Text,  } from "../../components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
    BankOutlined,
    PlusOutlined,
  PieChartOutlined,
  AppstoreFilled ,
  UserOutlined,
} from '@ant-design/icons';

import { Button, Upload } from 'antd';
import deal from "../../assets/images/BESTPROPERTIES.png";
import { Breadcrumb, Layout, Menu, theme ,//DatePicker, //TimePicker, 
Modal, Col, Row, Input,Typography,Select} from 'antd';
import Table from './User'
import { CloudUploadOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}





const items = [
  getItem('Dashboard', '1', <AppstoreFilled />),
  getItem('Properties', '2', <BankOutlined />),
  getItem('Users', '3', <UserOutlined />),
];
const App = () => {
 
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <br/>
        <div className="demo-logo-vertical" >
        <img src={deal} alt="Best Off Market Deal" className="h-[60px] w-[80px]" style={{margin:'auto'}}/></div>
        <br/>
        <Menu  theme='light' defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <br/><br/>
        
       
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
    
          </div> */}
          <Table/>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>


</>
  );
};
export default App;