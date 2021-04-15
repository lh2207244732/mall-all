import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, BorderHorizontalOutlined } from '@ant-design/icons';

import { actionCreator } from './store'


import './index.less'

class Login extends Component {


    componentDidMount() {
        this.props.handleCaptcha()
    }
    render() {
        const { captcha, handleLogin } = this.props

        {
            return (
                <div className="Login">
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={handleLogin}
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
                                    <div onClick={this.getCaptcha} className="captcha" dangerouslySetInnerHTML={{ __html: captcha }} ></div>
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
const mapStateToProps = (data) => {
    return {
        captcha: data.get('login').get('captcha')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleCaptcha: () => {
            dispatch(actionCreator.getCaptchaAction())
        },
        handleLogin: (values) => {
            dispatch(actionCreator.getLoginAction(values))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)