import { message } from 'antd';

import * as types from './actionTypes'
import api from '../../../api'
import { saveUsername, goHome } from '../../../util'

const setCaptcha = (captcha) => ({
    type: types.SET_CAPTCHA,
    payload: captcha
})

export const getCaptchaAction = () => {
    return async function (dispatch) {
        const result = await api.getCaptcha()
        if (result.code == 0) {
            dispatch(setCaptcha(result.data))
        }
    }
}

export const getLoginAction = (values) => {
    return async function (dispatch) {
        const result = await api.login({
            username: values.username,
            password: values.password,
            role: 'admin',
            captchaCode: values.captcha,
            channel: 'page'
        })
        if (result.code == 1) {
            message.success(result.message);
        } else {
            message.success('登录成功', 1)
            //保存登录状态
            saveUsername(result.data.username)
            //跳转到后台首页
            goHome()

        }
        console.log(result)

    }
}