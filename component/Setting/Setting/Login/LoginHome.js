import React, { memo } from "react";
import Background from "../../../AppSetting/components/Background";
import Logo from "../../../AppSetting/components/Logo";
import Button from "../../../AppSetting/components/Button";
import Paragraph from "../../../AppSetting/components/Paragraph";
import { View } from "react-native";
import BackButton from "../../../AppSetting/components/BackButton";

const HomeScreen = ({ navigation }) => (
   <Background>
      <View style={{ marginBottom: 30 }}></View>
      <BackButton goBack={() => navigation.navigate("OffLogin")} />
      <Logo />

      <View style={{ marginBottom: 60 }}></View>
      <Button
         mode="contained"
         onPress={() => navigation.navigate("LoginScreen")}
      >
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
