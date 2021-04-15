import * as types from './actionTypes'
import api from '../../../api'


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

