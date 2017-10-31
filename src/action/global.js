import {followUrl} from './common/'

export const loginIn = () => {
    return {
        type: 'LOGIN_IN'
    }
}

export const loginOut = () => {
    return {
        type: 'LOGIN_OUT'
    }
}

export const getFollowrs = () => {
    fetch()
    return {
        type:'GET_FOLLOWERS'
    }

}