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
const store = configStore()
MyStorage._getStorage()
MyStorage._load('name',ret=>{
    if(ret){
        store.dispatch({
            type: "LOGININ",
            userName: ret
        })
    }else{
        store.dispatch({
            userName: "LOGINOUT"
        })
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
