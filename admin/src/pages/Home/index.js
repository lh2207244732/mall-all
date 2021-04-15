import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actionCreator } from './store'


class Home extends Component {

    render() {
        {
            return (
                <div className="Home">
                    首页。。。
                </div>
            )
        }
    }
}
const mapStateToProps = (data) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)