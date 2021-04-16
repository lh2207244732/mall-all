import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd';

const { Content } = Layout;

export default class index extends Component {
    render() {
        const {
            usernum,
            ordernum,
            productnum
        } = this.props
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Row>
                        <Col span={8}>
                            <Card title="用户数" bordered={false} style={{ width: 300 }}>
                                <p>{usernum}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="商品数" bordered={false} style={{ width: 300 }}>
                                <p>{ordernum}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="订单数" bordered={false} style={{ width: 300 }}>
                                <p>{productnum}</p>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
