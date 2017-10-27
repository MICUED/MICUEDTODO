import React, { Component } from "react"
import {
    AppRegistry,
    View,
    Text
} from "react-native"
import { Provider } from "react-redux"
import { createStore } from "redux"
import AppWithNav from "./root.js"
import configStore from "./configStore.js"
import MyStorage from './util/globalStorage.js'
import { loginIn, loginOut } from './action/nav.js'
const store = configStore()
MyStorage._getStorage()
MyStorage._load('name', ret => {
    console.log("登录时获取",ret)
    if (ret) {
        console.log("启动登录")
        store.dispatch(loginIn(ret))
    } else {
        store.dispatch(loginOut())
    }
})

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNav />
            </Provider>
        )
    }
}

AppRegistry.registerComponent("MICUEDTODO", () => App)
