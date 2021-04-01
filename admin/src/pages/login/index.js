import React, { Component } from 'react'

import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, BorderHorizontalOutlined } from '@ant-design/icons';

import axios from 'axios'

import './index.less'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            captcha: ''
        }
        this.getCaptcha = this.getCaptcha.bind(this)
    }
    async getCaptcha() {
        // 发送 get 请求
        const result = await axios({
            method: 'get',
            url: '/v1/users/captcha',
        })
        if (result.status === 200) {
            this.setState({
                captcha: result.data.data
            })
        }
    }
    onFinish(values) {
        console.log('Received values of form: ', values);
    };
    //组件挂载完毕
    async componentDidMount() {
        this.getCaptcha()
    }
    render() {
        {
            return (
                <div className="Login">
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                }, {
                                    pattern: /^[a-zA-Z]\w{2,5}$/,
                                    message: '用户名以字母开头的3-6位字符!',
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                }, {
                                    pattern: /^\w{3,6}$/,
                                    message: '密码是3-6位任意字符!',
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="current-password"
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入验证码!',
                                }, {
                                    pattern: /^[a-z0-9]{4}$/i,
                                    message: '验证码格式错误!',
                                }
                            ]}
                        >
                            <Row>
                                <Col span={12}>
                                    <Input prefix={<BorderHorizontalOutlined className="site-form-item-icon" />} placeholder="验证码" />
                                </Col>
                                {/* 验证码 */}
                                <Col span={12}>
                                    <div onClick={this.getCaptcha} className="captcha" dangerouslySetInnerHTML={{ __html: this.state.captcha }} ></div>
                                </Col>
                            </Row>


                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )
        }
    }
}
export default Login