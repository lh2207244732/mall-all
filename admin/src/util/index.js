import moment from 'moment'
// 用来处理本地用户状态保存等相关方法
export const saveUsername = (username) => {
    window.localStorage.setItem('username', username)
}

export const getUsername = () => {
    return window.localStorage.getItem('username')
}

export const removeUsername = () => {
    window.localStorage.removeItem('username')
}

export const goLogin = () => {
    window.location.href = '/login'
}

export const goHome = () => {
    window.location.href = '/'
}

//时间格式转换
export const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:SS')
}