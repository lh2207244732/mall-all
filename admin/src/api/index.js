import axios from 'axios'
import { SERVER, VERSION, API_CONFIG } from './config'
import { goLogin, removeUsername } from '../util'

/**
 * 目标 根据配置文件生成一个对象,这个对象的每一个属性是一个方法名,属性的值是一个api的调用方法
 * 前端把登录的用户名保存到localStorage中是为了处理组件的验证以及显示登录用户的名称。

    真正的登录状态保存在服务端的session中,通过前端的cookie去验证。

    当用户退出登录后,请求后端的api返回的code就是10(代表没有权限),因此我们可以在api的调用方法中统一处理用户登录状态校验。
 * @param {object} apiConfig 
 */
const getApiObj = (apiConfig) => {
    const apiObj = {}
    for (let key in apiConfig) {
        apiObj[key] = (data) => {
            const url = SERVER + '/' + VERSION + apiConfig[key][0] || ''
            const method = apiConfig[key][1] || 'get'
            //发送请求
            return request(url, method, data)
        }
    }
    return apiObj
}

const request = (url, method, data) => {
    return new Promise((resolve, rejcect) => {
        const options = {
            method: method,
            url: url
        }
        switch (method.toUpperCase()) {
            case 'GET':
                options.params = data
                break
            default:
                options.data = data
                break
        }
        axios(options)
            .then(result => {
                const data = result.data
                if (data.code == 10) {
                    //没有权限
                    removeUsername()
                    goLogin()
                    rejcect('没有权限')
                } else {
                    resolve(data)
                }
            })
            .catch(e => {
                rejcect(e)
            })
    })
}

export default getApiObj(API_CONFIG)