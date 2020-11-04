import React, { memo } from "react";
import Background from "../../../AppSetting/components/Background";
import Logo from "../../../AppSetting/components/Logo";
import Paragraph from "../../../AppSetting/components/Paragraph";
import Button from "../../../AppSetting/components/Button";
import { logoutUser } from "../api/auth-api";
import { View } from "react-native";

const Dashboard = ({navigation}) => (
  <Background>
    <View style={{marginBottom:30}}></View>
    <Logo />
    <Paragraph>
      로그아웃 하시겠습니까?
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("OnLogin")}>
      돌아가기
    </Button>
    <Button mode="outlined" onPress={() => logoutUser()}>
      로그아웃
    </Button>
  </Background>
);

export default memo(Dashboard);