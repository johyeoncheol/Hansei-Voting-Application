import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { View } from "react-native";

const HomeScreen = ({ navigation }) => (
  <Background>
    <View style={{marginBottom:30}}></View>
    <Logo/>

    <View style={{marginBottom:60}}></View>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      로그인
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      회원가입
    </Button>
    <Paragraph>
      Hansei Voting은 학교 공식 홈페이지와 별개로 회원가입을 하셔야 합니다.
    </Paragraph>
  </Background>
);

export default memo(HomeScreen);