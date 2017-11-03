import React, { Component } from 'react'
<<<<<<< HEAD
import { Text, View, StyleSheet, Input, Dimensions, TextInput, Alert, Image } from 'react-native'
import { Container, Content, Button } from 'native-base';
=======
import { Text, Button, View, StyleSheet, Input, Dimensions, TextInput, Alert } from 'react-native'
import {
    MKTextField,
    MKColor,
    mdl,
} from 'react-native-material-kit';
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
const { widht, height } = Dimensions.get("window")
import MyStorage from '../util/globalStorage.js'
import { loginIn } from '../action/nav.js'
<<<<<<< HEAD
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

const styles = StyleSheet.create({
=======

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
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
<<<<<<< HEAD
            pwd: "",
            nameErr: false,
            pwdErr: false
        }
    }
    login() {
        if (!this.state.name) {
            return this.setState({
                nameVd: true
            })
        }
        if (!this.state.pwd) {
            return this.setState({
                pwdVd: true
            })
        }
        const self = this;
=======
            pwd: ""
        }
    }
    login() {
        const self = this
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
        fetch("http://localhost:9000/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
<<<<<<< HEAD
                name: this.state.name,
                pwd: this.state.pwd,
                // name: "yinshuxun",
                // pwd: "jiushiai"
=======
                // name: this.state.name,
                // pwd: this.state.pwd,
                name: "yinshuxun",
                pwd: "jiushiai"
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
            })
        })
            .then((response) => response.json())
            .then(ret => {
                if (ret.status === 1) {
<<<<<<< HEAD
                    console.log(ret)
                    self.props.saveLoginState(this.state.name)
                    MyStorage._getStorage()
                    MyStorage._sava("name", this.state.name)
=======
                    self.props.saveLoginState("yinshuxun")
                    MyStorage._getStorage()
                    MyStorage._sava("name", "yinshuxun")
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
                    self.props.navGo("Home")
                }
            })
            .catch(e => { })
    }
    render() {
        return (
<<<<<<< HEAD
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Image
                        style={{ width: 50, resizeMode: 'contain' }}
                        source={require("../asserts/ued.png")}
                    />
                    <Sae
                        label={'UserName'}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        style={{ width: 250 }}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        underlinecolorandroid="{'transparent'}"
                        onChangeText={name => this.setState({ name })}
                        autoCapitalize="none"
                        editable={true}
                    />
                    {
                        this.state.nameVd && <View>
                            <Text style={{ color: "red", textAlign: "left", marginTop: 10 }}>用户名不能为空</Text>
                        </View>
                    }
                    <Sae
                        label={'PassWord'}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil'}
                        iconColor={'white'}
                        style={{ width: 250 }}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        underlinecolorandroid="{'transparent'}"
                        onChangeText={pwd => this.setState({ pwd })}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        editable={true}
                    />
                    {
                        this.state.nameVd && <View>
                            <Text style={{ color: "red", textAlign: "left", marginTop: 10 }}>密码不能为空</Text>
                        </View>
                    }
                    <View>
                        <Button rounded style={{ width: 250, justifyContent: "center", marginTop: 40 }}
                            onPress={() => this.login()}>
                            <Text style={{ color: "#eee" }}>登录</Text>
                        </Button>
                    </View>
=======
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
>>>>>>> 80aeaabc6494fb604384d758f999854dcaeed7d7
                </View>
            </View>
        )
    }
}