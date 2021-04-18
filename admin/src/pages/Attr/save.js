import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Breadcrumb, Form, Input, Button } from 'antd';

const { Content } = Layout;
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 6,
    },
};


import CustomHeader from '../../components/Header'
import CustomSider from '../../components/Sider'
import { actionCreator } from './store';
import api from '../../api'

class AttrSave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.attrId
        }
        this.formRef = React.createRef()
    }
    async componentDidMount() {
        if (this.state.id) {
            const result = await api.getAttrsDetail({ id: this.state.id })
            if (result.code == 0) {
                const data = result.data
                this.formRef.current.setFieldsValue({
                    name: data.name,
                    key: data.key,
                    value: data.value,
                })
            }
        }
    }
    render() {
        const {
            handleSave,
        } = this.props
        return (
            <div className="AttrSave">
                <Layout>
                    <CustomHeader />
                    <Layout>
                        <CustomSider />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>属性管理</Breadcrumb.Item>
                                <Breadcrumb.Item>属性</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.state.id ? '编辑属性' : '添加属性'}</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Form
                                    {...layout}
                                    name="control-hooks"
                                    onFinish={(values) => handleSave(values, this.state.id)}
                                    ref={this.formRef}
                                >
                                    <Form.Item
                                        name="name"
                                        label="属性名称"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入属性名称'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="key"
                                        label="属性健"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入属性健'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="value"
                                        label="属性值"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入属性值,多个值用英文逗号分隔'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                            提交
                                </Button>
                                    </Form.Item>
                                </Form>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    handleSave: (values, id) => {
        dispatch(actionCreator.getSaveAction(values, id))
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(AttrSave)