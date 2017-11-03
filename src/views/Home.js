import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
<<<<<<< HEAD
    Dimensions,
=======
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
    View
} from "react-native"
import { connect } from "react-redux"
import { bus } from "../action/api.js"
<<<<<<< HEAD
import Header from '../components/Header.js'
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
=======
import LoginOut from './LoginOut.js'
import Header from '../components/Header.js'

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
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
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
<<<<<<< HEAD
            <View style={{ flex: 1 }}>
                <Header />
                {
                    this.props.tasks && this.props.tasks.data && this.props.tasks.data[0].data.map(({ author, name }, k) => {
                        return (
                            <View key={k} style={{ flexDirection: "row", height: 30, alignItems: "center" }}>
                                <Icon style={{ marginLeft: 10 }} name="bars" size={16} color="#222" />
                                <Text style={{ marginLeft: 10, fontSize: 16, width: width - 50 }}>{name}</Text>
                            </View>
                        )
                    })
                }

=======
            <View style={styles.container}>
                <Header/>
                {
                    this.props.tasks && this.props.tasks.data && this.props.tasks.data[0].data.map(({ author, name }, k) => {
                        return (
                            <Text key={k}>{author}:{name}</Text>
                        )
                    })
                }
                <LoginOut />
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
            </View>
        )
    }
}