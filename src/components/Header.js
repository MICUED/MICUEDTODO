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
        height: globalConfig.statusBarHieght + 60,
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

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={[styles.spec, { flexDirection: "row" }]}>
                    <Icon style={{ marginLeft: 15 }} name="pie-chart" size={24} color="#222" onPress={() => this.props.navGo('Dashboard')} />
                    <Icon style={{ marginLeft: 10 }} name="cog" size={24} color="#222" />
                </View>
                <View style={[styles.spec, { justifyContent: "flex-end", alignItems: "center" }]}>
                    {/* <Image
                        style={styles.icon}
                        source={{ uri: 'http://www.haorooms.com/uploads/images/http3.jpg' }}
                    /> */}
                    <Text onPress={() => this.props.navGo("Count")}>{this.props.userName}</Text>
                </View>
                <View style={styles.spec}>
                    <LoginOut />
                </View>
            </View>)
    }
}