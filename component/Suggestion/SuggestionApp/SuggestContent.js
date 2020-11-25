import React, { memo } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../../AppSetting/background/background4";
import BackButton from "../../AppSetting/components/BackButton";
import TextInput from "../../AppSetting/components/TextInput";
import Button from "../../AppSetting/components/Button";

const { width, height } = Dimensions.get("window");

const SuggestContent = ({ navigation }) => {
   return (
      <Background>
         <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.TopContent}>
               <BackButton goBack={() => navigation.navigate("Suggestion")} />
            </View>
            <View style={styles.card}>
               <ScrollView>
                  <View>
                     <Text style={styles.textfont}>건의 제목</Text>
                     <TextInput
                        style={{
                           width: width * 0.74,
                           marginLeft: width * 0.03,
                        }}
                        label="제목을 입력해주세요"
                        returnKeyType="done"
                     />
                     <Text style={styles.textfont}>건의 항목</Text>
                     <TextInput
                        style={{
                           width: width * 0.74,
                           height: height * 0.25,
                           marginLeft: width * 0.03,
                        }}
                        label="건의할 내용을 입력해주세요"
                        returnKeyType="done"
                     />
                  </View>
               </ScrollView>
               <Button
                  style={{
                     width: width * 0.74,
                     marginLeft: width * 0.03,
                  }}
                  mode="contained"
                  onPress={() => navigation.navigate("Suggestion")}
               >
                  전달 하기
               </Button>
            </View>
         </View>
      </Background>
   );
};
export default memo(SuggestContent);

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   TopContent: {
      flex: 3,
   },
   card: {
      backgroundColor: "white",
      flex: 10,
      width: width * 0.8,
      marginBottom: height * 0.08,
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
               width: 0,
            },
         },
         android: {
            elevation: 3,
         },
      }),
   },
   textfont: {
      fontSize: 15,
      color: "#1957A4",
      marginLeft: width * 0.02,
      marginTop: height * 0.01,
   },
});
