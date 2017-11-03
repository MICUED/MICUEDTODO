import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    View,
    Image,
    Dimensions
} from "react-native"
import { connect } from "react-redux"
import globalConfig from '../util/config.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginOut from './LoginOut.js'
import { NavigationActions } from 'react-navigation'

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    header: {
        paddingTop: globalConfig.statusBarHieght,
        backgroundColor: "#eee",
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        backgroundColor: "#454545"
    },
    spec: {
        flex: 1,
    }
})

@connect(state => ({
    userName: state.nav.userName
}),
    dispatch => ({
        navGo: (route) => dispatch(NavigationActions.navigate({
            routeName: route
        }))
    }))

export default class NavBar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={[styles.spec]}>
                    <Icon style={{ marginLeft: 15 }} name="mail-reply" size={24} color="#222" onPress={() => this.props.navGo('Home')} />
                </View>
                <View style={[styles.spec, { justifyContent: "flex-end", alignItems: "center" }]}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.spec}>
                    {/* <LoginOut /> */}
                </View>
            </View>)
    }
}