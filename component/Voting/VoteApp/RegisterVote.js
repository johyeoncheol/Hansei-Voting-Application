import React, { memo } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Background from '../../AppSetting/components/Background';
import BackButton from '../../AppSetting/components/BackButton';
import Button from '../../AppSetting/components/Button';
import TextInput from '../../AppSetting/components/TextInput2';

const { width, height } = Dimensions.get("window");


const RegisterVote = ({ navigation }) => {
    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('VoteList')} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.TopContent}>
                        <Text>투표 제목</Text>
                        <TextInput 
                        style={styles.textIn} 
                        label="제목을 입력해주세요"
                        returnKeyType="done"/>
                        <Text>투표 항목</Text>
                        <TextInput style={styles.textIn} returnKeyType="next" label="투표 항목1"></TextInput>
                        <TextInput style={styles.textIn} returnKeyType="next" label="투표 항목2"></TextInput>
                        <View style={{flexDirection:'row' }}>
                        <Button style={{ width: width * 0.30, marginBottom: 30,marginRight:width*0.04,marginLeft:width*0.03 }} mode="contained">항목 추가</Button>
                        <Button style={{ width: width * 0.30, marginBottom: 30 }} mode="contained">항목 삭제</Button>
                        </View>
                    </View>
                    <View style={styles.bottomContent}>
                        <Text>시작시간 설정</Text>
                        <Text>마감시간 설정</Text>
                    </View>
                    <Button style={{ width: width * 0.64, marginBottom: 30,marginLeft:width*0.03 }} mode="contained" onPress={() => navigation.navigate("VoteList")}> 저장 하기 </Button>
                </View>
            </View>
        </Background>
    );
}

export default memo(RegisterVote);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    card: {
        backgroundColor: "white",
        flex: 1,
        marginBottom: 10,
        marginLeft:20,
        width: width * 0.70,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowOpacity: 0.5,
                shadowColor: "rgb(50,50,50)",
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    textIn:{
        width: width * 0.64,
        marginLeft:width*0.03,
        height:36,
        fontSize:12
    },
    TopContent:{
        flex:5
    },
    bottomContent:{
        flex:1
    }
});