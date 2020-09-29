import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Suggestion extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='comment-alert-outline' size={20} style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View Style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.title}>Suggestion</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F23",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color:"red",
        fontSize:30,
        marginTop:50,
        fontWeight:"400"
    }
})