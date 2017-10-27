import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    View
} from "react-native"
import { connect } from "react-redux"
import { bus } from "../action/api.js"
import LoginOut from './LoginOut.js'

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
    tasks: state.api.tasks
}), dispatch => ({
    getSub: () => dispatch(bus())
}))
export default class HomeScreen extends React.Component {
    constructor(props) {
        super()
    }
    componentWillMount() {
        this.props.getSub();
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.tasks && this.props.tasks.data && this.props.tasks.data[0].data.map(({ author, name }, k) => {
                        return (
                            <Text key={k}>{author}:{name}</Text>
                        )
                    })
                }
                <LoginOut />
            </View>
        )
    }
}