import React, { memo } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import BackButton from "../../AppSetting/components/BackButton";
import Button from "../../AppSetting/components/Button";
import TextInput from "../../AppSetting/components/TextInput2";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width, height } = Dimensions.get("window");

const RegisterVote = ({ navigation }) => {
   return (
      <>
         <View style={styles.container}>
            <View style={styles.card}>
               <BackButton goBack={() => navigation.navigate("VoteList")} />
               <ScrollView>
                  <View style={styles.TopContent}>
                     <Text style={styles.textfont}>투표 제목</Text>
                     <TextInput
                        style={styles.textIn}
                        label="제목을 입력해주세요"
                        returnKeyType="done"
                     />
                     <Text style={styles.textfont}>투표 항목</Text>
                     <TextInput
                        style={styles.textIn}
                        returnKeyType="next"
                        label="투표 항목1"
                     ></TextInput>
                     <TextInput
                        style={styles.textIn}
                        returnKeyType="next"
                        label="투표 항목2"
                     ></TextInput>
                     <View style={{ flexDirection: "row" }}>
                        <Button
                           style={{
                              width: width * 0.3,
                              marginBottom: 15,
                              marginRight: width * 0.04,
                              marginLeft: width * 0.03,
                           }}
                           mode="contained"
                        >
                           항목 추가
                        </Button>
                        <Button
                           style={{ width: width * 0.3, marginBottom: 15 }}
                           mode="contained"
                        >
                           항목 삭제
                        </Button>
                     </View>
                  </View>
                  <View style={styles.bottomContent}>
                     <Text style={styles.textfont}>시작시간 설정</Text>
                     <Text style={styles.textfont}>마감시간 설정</Text>
                  </View>
                  <Button
                     style={{
                        width: width * 0.64,
                        marginBottom: 30,
                        marginLeft: width * 0.03,
                     }}
                     mode="contained"
                     onPress={() => navigation.navigate("VoteList")}
                  >
                     {" "}
                     저장 하기{" "}
                  </Button>
               </ScrollView>
            </View>
         </View>
      </>
   );
};

export default memo(RegisterVote);

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
   },
   card: {
      backgroundColor: "white",
      flex: 1,
      alignItems: "center",
      width: width * 0.95,
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
   textIn: {
      width: width * 0.64,
      marginLeft: width * 0.03,
      height: 40,
      fontSize: 12,
   },
   TopContent: {
      flex: 5,
      marginTop: 15,
   },
   bottomContent: {
      flex: 1,
   },
   textfont: {
      fontSize: 15,
      color: "#1957A4",
   },
});
