//这是api的配置文件
export const SERVER = process.env.NODE_ENV == 'production' ? 'http://api.sortmall.com' : ''
export const VERSION = 'v1'

export const API_CONFIG = {
    //方法名称:     [请求地址,请求方法]
    getCaptcha: ['/users/captcha', 'get'],
    login: ['/users/login', 'post'],
}