import MyStorage from '../util/globalStorage.js'

export const loginIn = (userName) => {
    return {
        type: "LOGININ",
        userName
    }
}

export const loginOut = () => {
    MyStorage._getStorage()
    MyStorage._sava('name','')
    return {
        type: "LOGINOUT"
    }
}