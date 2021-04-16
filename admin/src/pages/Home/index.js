import React, { Component } from 'react'
import { connect } from 'react-redux'



import { Layout } from 'antd';

import { actionCreator } from './store';


import CustomHeader from '../../components/Header'
import CustomSider from '../../components/Sider'
import CustomLayout from '../../components/Layout'

import './index.less'





class Home extends Component {


    componentDidMount() {
        this.props.handleCounts()
    }
    render() {
        const {
            usernum,
            ordernum,
            productnum
        } = this.props
        {
            return (
                <div className="Home">
                    <Layout>
                        <CustomHeader />
                        <Layout>
                            <CustomSider />
                            <CustomLayout usernum={usernum} ordernum={ordernum} productnum={productnum} />
                        </Layout>
                    </Layout>,
                </div>
            )
        }
    }
}


const mapStateToProps = (data) => {
    return {
        usernum: data.get('home').get('usernum'),
        ordernum: data.get('home').get('ordernum'),
        productnum: data.get('home').get('productnum')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleCounts: () => {
            dispatch(actionCreator.getCountsAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)