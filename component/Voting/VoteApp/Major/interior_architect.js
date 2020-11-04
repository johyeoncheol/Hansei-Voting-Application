import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class interior_architect extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.FontStyle}> your name : Jo HyeonCheol</Text>
                <Text style={styles.FontStyle}> grade : 4</Text>
                <Text style={styles.FontStyle}> department : ICT</Text>
                <Text style={styles.FontStyle}> gender : male</Text>
                <Text style={styles.FontStyle}> the content of a suggestion</Text>
                <Text style={styles.FontStyle}> 1.tuition fee</Text>
                <Text style={styles.FontStyle}> 2.chair installation</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    FontStyle:{
        fontSize: 24,
        color: "#158974",
        marginTop: 30
    },
    TopContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    MidContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Botcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});