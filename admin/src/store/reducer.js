// import { combineReducers} from 'redux'
import { combineReducers } from 'redux-immutable'


import { reducer as login } from '../pages/Login/store'
import { reducer as home } from '../pages/Home/store'


//合并所有组件的reduer
export default combineReducers({
    login, home
})