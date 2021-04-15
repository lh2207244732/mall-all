import * as types from './actionTypes'

import { fromJS } from 'immutable'
//定义一个初始化的state
const defaultState = fromJS({})


function reducer(state = defaultState, action) {
    if (action.type == types.SET_CAPTCHA) {
        return state.set('captcha', action.payload)
    }
    return state
}

export default reducer