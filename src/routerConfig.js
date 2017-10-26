import React, { Component } from "react"
import { StackNavigator } from "react-navigation"
import HomeScreen from "./container/Home.js"
import Setting from "./container/Setting.js"
import Login from './container/Login.js'
import LocalStorage from './util/globalStorage.js'

const paramsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions
        render() {
            const { navigation, ...otherProps } = this.props
            const { state: { params } } = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

const stackNavigatorConfig = {
    initialRouteName: 'Home', // 默认显示界面  
    mode: "card",
    headerMode: "none",
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps
            const { index } = scene

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            })

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            })

            return { opacity, transform: [{ translateX }] }
        }
    })
}

const routes = {
    Login: { screen: paramsToProps(Login) },
    Home: { screen: paramsToProps(HomeScreen) },
    Setting: { screen: paramsToProps(Setting) }
}

const MyApp = StackNavigator(routes, stackNavigatorConfig)


const defaultGetStateForAction = MyApp.router.getStateForAction;

MyApp.router.getStateForAction = (action, state) => {
    if (action.routeName != 'Login' && state && !state.hasLogin) {
        const routes = [
            ...state.routes,
            { key: 'id-' + Date.now(), routeName: 'Login' }
        ]
        return {
            ...state,
            routes,
            index: routes.length - 1,
        }
    }
    return defaultGetStateForAction(action, state)
}

export const AppNavigator = MyApp
