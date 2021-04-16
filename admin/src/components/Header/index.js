import React, { Component } from 'react'


import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Header } = Layout;

import { getUsername, removeUsername, goLogin } from '../../util'
import api from '../../api'



export default class index extends Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }
    async handleLogout() {
        const result = await api.logout()
        removeUsername()
        goLogin()
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a onClick={() => { this.handleLogout }} >退出</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header className="header">
                <div className="logo">SortMall后台管理系统</div>
                <div className='logout' >
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {getUsername()} <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}
