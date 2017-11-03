import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    Dimensions,
    View
} from "react-native"
import { connect } from "react-redux"
import { bus } from "../action/api.js"
import Header from '../components/Header.js'
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
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

            </View>
        )
    }
}