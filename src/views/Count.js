import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    Dimensions,
    View,
    Image
} from "react-native"
import { connect } from "react-redux"
import { bus, counts } from "../action/api.js"
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../util/config.js'
import Nav from "../components/NavBar.js"
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        backgroundColor: "#454545"
    }
})
@connect(state => ({
    counts: state.api.counts
}), dispatch => ({
    getCounts: () => dispatch(counts())
}))
export default class Statistics extends React.Component {
    constructor(props) {
        super()
    }
    componentWillMount() {
        this.props.getCounts();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Nav title="我的统计" />
                <View>
                    {
                        this.props.counts.map(({ name ,day}, index) => {
                            return <View key={index} style={{ flexDirection: "row", height: 30, alignItems: "center" }}>
                                <Icon style={{ marginLeft: 10 }} name="check" size={16} color="green" />
                                <Text style={{ marginLeft: 10, fontSize: 16, width: 50 }}>{(day+"").substring(5,9)}</Text>
                                <Text style={{ marginLeft: 10, fontSize: 16, width: width - 100 }}>{name}</Text>
                            </View>
                        })
                    }
                </View>
            </View>
        )
    }
}