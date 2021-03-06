import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Breadcrumb, Table, InputNumber, Button } from 'antd';
import { Link } from 'react-router-dom'
const { Content } = Layout;


import CustomHeader from '../../components/Header'
import CustomSider from '../../components/Sider'
import { actionCreator } from './store';

class AttrList extends Component {
    componentDidMount() {
        this.props.handlePage(1)
    }

    render() {
        const {
            list,
            current,
            total,
            pageSize,
            handlePage,
            isFetching,
            handleUpdateOrder,
        } = this.props
        const dataSource = list
        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '属性键',
                dataIndex: 'key',
            },
            {
                title: '属性值',
                dataIndex: 'value',
            },
            {
                title: '排序',
                dataIndex: 'order',
                render: (order, record) => <InputNumber
                    defaultValue={order}
                    onBlur={ev => {
                        if (ev.target.value != order) {
                            handleUpdateOrder(record._id, ev.target.value)
                        }
                    }}
                ></InputNumber>
            },
            {
                title: '操作',
                render: (text, record) => <span>
                    <Link to={'/attr/save/' + record._id}>修改</Link>
                </span>
            },
        ]

        return (
            <div className="AttrList">
                <Layout>
                    <CustomHeader />
                    <Layout>
                        <CustomSider />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>属性管理</Breadcrumb.Item>
                                <Breadcrumb.Item>属性</Breadcrumb.Item>
                                <Breadcrumb.Item>属性列表</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                    marginBottom: '20px'
                                }}>
                                    <Link to="/attr/save">
                                        <Button type='primary'>新增</Button>
                                    </Link>
                                </div>
                                <Table
                                    rowKey="_id"
                                    dataSource={dataSource}
                                    columns={columns}
                                    pagination={
                                        {
                                            current: current,
                                            pageSize: pageSize,
                                            total: total,
                                            showSizeChanger: false
                                        }
                                    }
                                    onChange={
                                        (pagination) => {
                                            handlePage(pagination.current)
                                        }
                                    }
                                    loading={
                                        {
                                            spinning: isFetching,
                                            tip: '数据正在请求中...'
                                        }
                                    }
                                />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('attr').get('list'),
    current: state.get('attr').get('current'),
    total: state.get('attr').get('total'),
    pageSize: state.get('attr').get('pageSize'),
    isFetching: state.get('attr').get('isFetching'),
})
const mapDispatchToProps = (dispatch) => ({
    handlePage: (page) => {
        dispatch(actionCreator.getPageAction(page))
    },
    handleUpdateOrder: (id, newOrder) => {
        dispatch(actionCreator.getUpdateOrderAction(id, newOrder))
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(AttrList)
