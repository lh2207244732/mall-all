import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store';

import { Layout, Breadcrumb, Form, Input, Button, Select } from 'antd';

import CustomHeader from '../../components/Header'
import CustomSider from '../../components/Sider'
import UploadImage from '../../components/UploadImage'
import { CATEGORY_ICON_UPLOAD } from '../../api/config'
import api from '../../api'

const { Content } = Layout;
const { Option } = Select;
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

class CategorySave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.categoryId,
            icon: '',
            iconValidate: {
                help: '',
                validateStatus: ''
            }
        }
        this.handleIcon = this.handleIcon.bind(this)
        this.handleFinish = this.handleFinish.bind(this)
        this.handleValidate = this.handleValidate.bind(this)

        this.formRef = React.createRef()
    }
    handleIcon(icon) {
        this.setState({
            icon: icon,
            iconValidate: {
                help: '',
                validateStatus: ''
            }
        })
    }
    handleFinish(values) {
        const { icon, id } = this.state
        this.handleValidate()
        if (icon) {
            values.icon = icon
            values.id = id
            this.props.handleSave(values)
        }
    }
    handleValidate() {
        const { icon } = this.state
        if (!icon) {
            this.setState({
                iconValidate: {
                    help: '请上传手机图标',
                    validateStatus: 'error'
                }
            })
        }
    }

    async componentDidMount() {
        this.props.handleLevelCategories()
        // 如果存在id则表示是编辑分类
        if (this.state.id) {
            const result = await api.getCategoriesDetail({ id: this.state.id })
            console.log(result)
            if (result.code == 0) {
                const { data } = result
                this.formRef.current.setFieldsValue({
                    pid: data.pid,
                    name: data.name,
                    mobileName: data.mobileName
                })
                this.setState({
                    icon: data.icon
                })
            }
        } else {
            this.setState({
                icon: ''
            })
        }
    }

    render() {
        const { iconValidate, icon } = this.state
        const { categories } = this.props
        const options = categories.map(category => <Option key={category._id} value={category._id}>{category.name}</Option>)
        let fileList = []
        if (icon) {
            fileList.push({
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: icon,
            })
        } else {
            fileList = []
        }
        return (
            <div className="CategorySave">
                <Layout>
                    <CustomHeader />
                    <Layout>
                        <CustomSider />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>分类</Breadcrumb.Item>
                                <Breadcrumb.Item>添加分类</Breadcrumb.Item>
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
                                    onFinish={this.handleFinish}
                                    onFinishFailed={this.handleValidate}
                                    ref={this.formRef}
                                >
                                    <Form.Item
                                        name="pid"
                                        label="父级分类"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请选择父级分类'
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="请选择父级分类"
                                        >
                                            <Option value="0">根分类</Option>
                                            {options}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name="name"
                                        label="分类名称"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入分类名称'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="mobileName"
                                        label="手机分类名称"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入手机分类名称'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="手机分类图标"
                                        required={true}
                                        {...iconValidate}
                                    >
                                        <UploadImage
                                            max={1}
                                            action={CATEGORY_ICON_UPLOAD}
                                            getImageUrlList={this.handleIcon}
                                            fileList={fileList}
                                        />
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
    categories: state.get('category').get('categories'),
})
const mapDispatchToProps = (dispatch) => ({
    handleSave: (values) => {
        dispatch(actionCreator.getSaveAction(values))
    },
    handleLevelCategories: () => {
        dispatch(actionCreator.getLevelCategoriesAction())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CategorySave)