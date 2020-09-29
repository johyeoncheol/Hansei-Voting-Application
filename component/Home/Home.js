import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Fontisto';

const { width, height } = Dimensions.get("window");

export default class Home extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' size={20} style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <Text style={styles.fontStyle}>notice</Text>
                </View>
                <View style={styles.BottomContainer}>
                    <Text>한세대학교</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fontStyle: {
        fontSize: 24,
        color: "white",
        marginTop: 30
    },
    TopContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomContainer: {
        flex: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
