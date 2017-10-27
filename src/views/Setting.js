import React, { Component } from "react"
import {
    Switch,
    StyleSheet,
    View,
    Text
} from 'react-native'
import MixPush from 'react-native-mixpush'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        paddingTop: 30
    },
    spec: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'flex-start',
        marginTop: 30
    }
})

export default class Setting extends React.Component {
    componentWillMount() {

        MixPush.getRegistrationID((registrationId) => {
            console.log(registrationId)
        })
        MixPush.setTags(['todo'], (success) => {
            console.log("succ:" + success)
        }, (e) => {
            console.log("fail" + e)
        })

        console.log(MixPush.addReceiveOpenNotificationListener)
        MixPush.addReceiveOpenNotificationListener((map) => {
            console.log(123131)
        });
        MixPush.addReceiveOpenNotificationListener((map) => {
            console.log(map)
        })
        MixPush.addReceiveCustomMsgListener((message)=>{
            console.log(message)
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.spec}>
                    <View>
                        <Text style={{ fontSize: 20, marginRight: 10 }}>开启通知</Text>
                    </View>
                    <Switch></Switch>
                </View>
            </View>
        )
    }
}

