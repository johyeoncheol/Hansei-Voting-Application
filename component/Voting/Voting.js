import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Voting extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='vote' size={20} style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View Style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.title}>Voting</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F23",
        alignItems:"center",
    },
    title:{
        color:"red",
        fontSize:30,
        marginTop:50,
        fontWeight:"400"
    }
})