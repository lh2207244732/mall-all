import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined, InsertRowLeftOutlined, LockOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;
import './index.less'

export default class index extends Component {
    render() {
        return (
            <div className='CustomSider'>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: 800, borderRight: 0 }}
                    >

                        <Menu.Item key="1">
                            <NavLink exact to='/' > <HomeOutlined /> 首页</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to='/user' ><UserOutlined /> 用户管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/category' ><InsertRowLeftOutlined /> 分类管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to='/attr' ><InsertRowLeftOutlined />属性管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <NavLink to='/product' ><InsertRowLeftOutlined />商品管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <NavLink to='/order' ><InsertRowLeftOutlined />订单管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <NavLink to='/ad' ><InsertRowLeftOutlined />广告管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to="/pwd"><LockOutlined /> 修改密码</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>
        )
    }
}
