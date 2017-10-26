import React, { Component } from 'react'
import { Text, Button, View, StyleSheet, Input, Dimensions, TextInput, Alert } from 'react-native'
import {
    MKTextField,
    MKColor,
    mdl,
} from 'react-native-material-kit';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
const { widht, height } = Dimensions.get("window")
import MyStorage from '../util/globalStorage.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        width: 200,
        height: 40,
        borderWidth: 1,
        paddingLeft: 10
    }
})

@connect(
    null,
    dispatch => ({
        navGo: (route) => dispatch(NavigationActions.navigate({
            routeName: route
        }))
    })
)

export default class Login extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: "",
            pwd: ""
        }
    }
    componentDidMount() {
        // this.props.storage.load({
        //     key: "name"
        // }).then(ret => {
        //     Alert.alert(ret)
        // }).then(e => {
        //     cosnole.log(e)
        // })
    }
    login() {
        MyStorage._getStorage()
        MyStorage._sava3("name", "yinshuxun")
        MyStorage._load('name', (ret) => {
            console.log('login',ret)
        })
        this.props.navGo("Home")

        // fetch("http://localhost:9000/login", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name: this.state.name,
        //         pwd: this.state.pwd,
        //     })
        // })
        //     .then((response) => response.json())
        //     .then(ret => {
        //         if (ret.status === 1) {
        //             Alert.alert(ret.info)
        //             // Storage._sava3("name", this.state.name)
        //             this.props.navGo("Home")
        //         }
        //     })
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.wrap}
                        placeholder="UserName"
                        textalign="center" underlinecolorandroid="{'transparent'}"
                        onChangeText={name => this.setState({ name })}
                        autoCapitalize="none"
                        editable={true} />
                    <TextInput style={styles.wrap}
                        secureTextEntry={true}
                        textalign="center"
                        underlinecolorandroid="{'transparent'}"
                        onChangeText={pwd => this.setState({ pwd })}
                        placeholder="PassWord"
                        editable={true} />
                    <Button
                        style={{ marginTop: 20 }}
                        onPress={() => this.login()}
                        title="登录"
                        color="#841584" />
                </View>
            </View>
        )
    }
}