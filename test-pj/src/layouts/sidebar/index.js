import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'
import { HomeOutlined, UserAddOutlined, ShopOutlined } from '@ant-design/icons'

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation()
  return (
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          style={{ marginTop: '70px'}}
        >
          <Menu.Item key='/' icon={<HomeOutlined />}>
            <span>Home</span>
            <Link to='/' />
          </Menu.Item>
          <Menu.Item key='/company' icon={<ShopOutlined />}>
            <span>Company</span>
            <Link to='/company' />
          </Menu.Item>
          <Menu.Item key='/customer' icon={<UserAddOutlined />}>
            <span>Customer</span>
            <Link to='/customer' />
          </Menu.Item>
        </Menu>
      </Sider>
  );
};

export default Sidebar;