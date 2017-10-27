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
import { loginIn } from '../action/nav.js'

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
        })),
        saveLoginState: (name) => dispatch(loginIn(name))
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
    login() {
        const self = this
        fetch("http://localhost:9000/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // name: this.state.name,
                // pwd: this.state.pwd,
                name: "yinshuxun",
                pwd: "jiushiai"
            })
        })
            .then((response) => response.json())
            .then(ret => {
                if (ret.status === 1) {
                    self.props.saveLoginState("yinshuxun")
                    MyStorage._getStorage()
                    MyStorage._sava("name", "yinshuxun")
                    self.props.navGo("Home")
                }
            })
            .catch(e => { })
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