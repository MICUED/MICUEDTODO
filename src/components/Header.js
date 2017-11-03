import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    View,
<<<<<<< HEAD
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
=======
    Image
} from "react-native"
import { connect } from "react-redux"
import globalConfig from '../util/config.js'
import icon from "../util/Micon2.js"

const styles = StyleSheet.create({
    icon: {
        width:300,
        height:300,
        borderWidth:1,
        borderColor:'#454545'
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
                source={{ uri: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=31&spn=0&di=147525643540&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=302701032%2C2300144492&os=2254158680%2C3118847255&simid=3383544786%2C381534848&adpicid=0&lpn=0&ln=1994&fr=&fmq=1509353409084_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150820%2Ftooopen_sy_139205349641.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bp555rjg_z%26e3Bv54AzdH3FetjoAzdH3F8ac0a0c_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0'}}
            />
            <Text>12312312</Text>
        </View>)
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
    }
}