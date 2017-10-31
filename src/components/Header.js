import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    View,
    Image
} from "react-native"
import { connect } from "react-redux"
import globalConfig from '../util/config.js'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    icon: {
        width:50,
        height:50,
        borderRadius:25,
        resizeMode:'contain',
        backgroundColor:"#454545"
    },
    header: {
        marginTop: globalConfig.statusBarHieght
    }
})

export default class Header extends Component {
    render() {
        return (
        <View style={styles.header}>
            <Image
                style={styles.icon}
                source={require("../asserts/ued.png")}
            />
            <Icon name="rocket" size={16} color="#222" />
            <Text>12312312</Text>
        </View>)
    }
}