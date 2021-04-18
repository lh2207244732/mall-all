// import { combineReducers} from 'redux'
import { combineReducers } from 'redux-immutable'


import { reducer as login } from '../pages/Login/store'
import { reducer as home } from '../pages/Home/store'
import { reducer as user } from '../pages/User/store'
import { reducer as category } from '../pages/Category/store'
import { reducer as attr } from '../pages/Attr/store'
import { reducer as product } from '../pages/Product/store'
import { reducer as ad } from '../pages/Ad/store'


//合并所有组件的reduer
export default combineReducers({
    login, home, user, category, attr, product, ad
})