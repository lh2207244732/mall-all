import React, { Component } from 'react'

import { Layout, Breadcrumb, Form, Input, Image, InputNumber, Tag } from 'antd';
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

import api from '../../api'

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.productId,
            product: {}
        }
        this.formRef = React.createRef()
    }
    async componentDidMount() {
        if (this.state.id) {
            const result = await api.getProductsDetail({ id: this.state.id })
            if (result.code == 0) {
                const data = result.data
                this.formRef.current.setFieldsValue({
                    category: data.category.name,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    stock: data.stock,
                    payNums: data.payNums
                })
                this.setState({
                    product: data
                })
            }
        }
    }
    render() {
        const { attrs, mainImage, images, detail } = this.state.product
        let attrTags = null
        let imagesWrap = null
        if (attrs) {
            attrTags = attrs.map((attr) => <Tag key={attr._id}>{attr.key}</Tag>)
        }
        if (images) {
            imagesWrap = images.split(',').map((url, index) => <Image width={100} key={index} src={url} />)
        }

        return (
            <div className="ProductDetail">
                <Layout>
                    <CustomHeader />
                    <Layout>
                        <CustomSider />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>????????????</Breadcrumb.Item>
                                <Breadcrumb.Item>??????</Breadcrumb.Item>
                                <Breadcrumb.Item>????????????</Breadcrumb.Item>
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
                                    ref={this.formRef}
                                >
                                    <Form.Item
                                        name="category"
                                        label="????????????"
                                    >
                                        <Input disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        name="name"
                                        label="????????????"
                                    >
                                        <Input disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        name="description"
                                        label="????????????"
                                    >
                                        <Input disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        name="price"
                                        label="????????????"
                                    >
                                        <InputNumber disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        name="stock"
                                        label="????????????"
                                    >
                                        <InputNumber disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        name="payNums"
                                        label="????????????"
                                    >
                                        <InputNumber disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        label="????????????"
                                    >
                                        {attrTags}
                                    </Form.Item>
                                    <Form.Item
                                        label="????????????"
                                    >
                                        <Image width={100} src={mainImage} />
                                    </Form.Item>
                                    <Form.Item
                                        label="????????????"
                                    >
                                        {imagesWrap}
                                    </Form.Item>
                                    <Form.Item
                                        label="????????????"
                                        labelCol={{ span: 6 }}
                                        wrapperCol={{ span: 16 }}
                                    >
                                        <div style={{ marginTop: 5 }} dangerouslySetInnerHTML={{ __html: detail }}></div>
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