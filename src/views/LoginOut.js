import React, { Component } from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { loginOut } from '../action/nav.js'

@connect(null, dispatch => ({
    logOut:()=>{dispatch(loginOut())}
}))

export default class LoginOut extends Component {
    logout() {
        this.props.logOut()
    }
    render() {
        return (
            <Button
                title="退出登录1"
                onPress={() => { this.logout() }} />
        )
    }
}