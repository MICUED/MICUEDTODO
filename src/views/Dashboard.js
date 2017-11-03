import React, { Component } from "react"
import {
    Text,
    StyleSheet,
    Animated,
    Button,
    Dimensions,
    View,
    Image,
    FlatList
} from "react-native"
import { connect } from "react-redux"
import { bus } from "../action/api.js"
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
    tasks: state.api.tasks
}), dispatch => ({
    getSub: () => dispatch(bus())
}))
export default class Dashboard extends React.Component {
    constructor(props) {
        super()
    }
    componentWillMount() {
        this.props.getSub();
    }

    _keyExtractor = (item, index) => item.id;
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Nav title="DashBoard" />
                <FlatList
                    data={this.props.tasks.data}
                    keyExtractor={this._keyExtractor}
                    key={this.props.tasks}
                    renderItem={({ item }) => {
                        return item.data.map(({ author, name }, k) => {
                            return (
                                <View key={k}>
                                    {
                                        k === 0 && <Text style={{ marginTop: 20, fontSize: 20 }}>{author}</Text>
                                    }
                                    <View key={k} style={{ flexDirection: "row", height: 30, alignItems: "center" }}>
                                        <Icon style={{ marginLeft: 10 }} name="bars" size={16} color="#222" />
                                        <Text style={{ marginLeft: 10, fontSize: 16, width: width - 50 }}>{name}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }}
                />
            </View>
        )
    }
}