import React from "react";
import { StatusBar } from "expo-status-bar";
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   Image,
   Dimensions,
} from "react-native";

import Background from "../../AppSetting/background/background1";
import Button from "../../AppSetting/components/Button";

const { width, height } = Dimensions.get("window");

export default class VoteHome extends React.Component {
   render() {
      return (
         <Background>
            <View Style={styles.container}>
               <StatusBar barStyle="light-content" />
               <View style={styles.TopContent}>
                  <Text style={styles.title}>투표시 유의사항</Text>
                  <Text style={styles.content}>
                     1. 투표는 로그인이 완료된 후에 진행할 수 있어요.
                  </Text>
                  <Text style={styles.content}>
                     2. 투표가 완료되면, 절대 되돌릴 수 없어요.
                  </Text>
                  <Text style={styles.content}>
                     3. 투표를 시작하면, 각 학과에 따라 투표를 선택하실 수
                     있어요.
                  </Text>
                  <Text style={styles.content}>
                     4. 투표는 꼭! 주위에 아무도 없는 곳에서 진행해 주세요.
                  </Text>
               </View>
               <Button
                  style={{
                     width: width * 0.7,
                     height: height * 0.08,
                     marginBottom: 30,
                     marginLeft: width * 0.07,
                  }}
                  mode="contained"
                  onPress={() => this.props.navigation.navigate("MajorSelect")}
               >
                  <Text
                     style={{
                        fontSize: 20,
                        color: "white",
                        marginTop: height * 0.01,
                     }}
                  >
                     투표하기
                  </Text>
               </Button>
            </View>
         </Background>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   button: {
      width: width * 0.85,
      height: height * 0.1,
      paddingLeft: 10,
   },
   TopContent: {
      marginBottom: height * 0.2,
   },
   title: {
      color: "#1917A4",
      fontSize: 30,
      marginLeft: 10,
   },
   content: {
      color: "#1917A4",
      fontSize: 16,
      marginTop: height * 0.03,
      marginLeft: 15,
      fontWeight: "900",
   },
});
