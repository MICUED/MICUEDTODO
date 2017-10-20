import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    View
} from "react-native"
import { connect } from "react-redux"
import { show, hide } from "../action/home.js"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6"
    },
    view: {
        flexDirection: "row"
    }
})
@connect(state => ({
    status: state.home.status
}), dispatch => ({
    showFunc: () => dispatch(show()),
    hideFunc: () => dispatch(hide())
}))
export default class HomeScreen extends React.Component {
    constructor(props) {
        super()
    }
    pressFunc() {
    }
    logout() {

    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="退出登录"
                    onPress={() => { this.logout }} />
            </View>
        )
    }
}