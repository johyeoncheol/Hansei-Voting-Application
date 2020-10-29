import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";

import Background from '../../AppSetting/background/background1';

const { width, height } = Dimensions.get("window");

export default class Voting extends React.Component {
    render() {
        return (
            <Background>
                <View Style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.TopContent}>
                        <Text style={styles.title}>투표시 유의사항</Text>
                        <Text style={styles.content}>1. 투표는 로그인이 완료된 후에 진행할 수 있어요.</Text>
                        <Text style={styles.content}>2. 투표가 완료되면, 절대 되돌릴 수 없어요.</Text>
                        <Text style={styles.content}>3. 투표를 시작하면, 각 학과에 따라 투표를 선택하실 수 있어요.</Text>
                        <Text style={styles.content}>4. 투표는 꼭! 주위에 아무도 없는 곳에서 진행해 주세요.</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MajorSelect')} style={styles.button}>
                        <Image style={styles.button} source={require('../../../assets/getstarted.png')} />
                    </TouchableOpacity>
                </View>
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width:width-90,
        height:height/9,
        paddingLeft:10,
    },
    TopContent:{
        marginBottom:height-550,
    },
    title: {
        color: "#1917A4",
        fontSize: 30,
        marginLeft: 10,
    },
    content: {
        color: "#1917A4",
        fontSize: 16,
        marginTop: 25,
        marginLeft: 15,
        fontWeight: '900',
    },
})