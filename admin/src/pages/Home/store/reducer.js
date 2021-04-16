import * as types from './actionTypes'

import { fromJS } from 'immutable'
//定义一个初始化的state
const defaultState = fromJS({
    usernum: 0,
    ordernum: 0,
    productnum: 0
})


function reducer(state = defaultState, action) {
    if (action.types == types.SET_COUNTS) {
        const { usernum, ordernum, productnum } = action.payload
        return state.merge({
            usernum: usernum,
            ordernum: ordernum,
            productnum: productnum
        })

    }
    return state
}

export default reducer