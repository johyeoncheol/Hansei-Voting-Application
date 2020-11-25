import React, { memo } from "react";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { BarChart, Grid, YAxis, XAxis } from "react-native-svg-charts";

const { width, height } = Dimensions.get("window");

import Background from "../../AppSetting/background/background3";
import BackButton from "../../AppSetting/components/BackButton";

const fill = "rgb(134, 65, 244)";
const data = [36, 20, 25, 3];
const VoteNotice = ({ navigation }) => {
   return (
      <Background>
         <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.card}>
               <View
                  style={{
                     marginBottom: height * 0.07,
                     marginRight: width * 0.8,
                     flex: 2,
                  }}
               >
                  <BackButton goBack={() => navigation.navigate("Home")} />
               </View>
               <View>
                  <View style={styles.TopContainer}>
                     <Text style={styles.fontStyle}>공지 제목</Text>
                     <Text style={styles.contentFont}>
                        {navigation.state.params.Notice.title}
                     </Text>
                  </View>
                  <ScrollView style={{ height: height * 0.4 }}>
                     <View style={styles.BottomContainer}>
                        <Text style={styles.fontStyle}>공지 내용</Text>
                        <Text style={{ fontSize: 15 }}>
                           {navigation.state.params.Notice.Content}
                        </Text>
                        <View>
                           <View style={{ flexDirection: "row" }}>
                              <YAxis
                                 data={data}
                                 contentInset={{ top: 20, bottom: 20 }}
                                 svg={{
                                    fill: "grey",
                                    fontSize: 10,
                                 }}
                                 numberOfTicks={10}
                                 formatLabel={(value) => `${value}표`}
                              />
                              <BarChart
                                 style={{
                                    height: height * 0.3,
                                    width: width * 0.5,
                                 }}
                                 data={data}
                                 svg={{ fill }}
                                 contentInset={{ top: 30, bottom: 30 }}
                              >
                                 <Grid />
                              </BarChart>
                           </View>
                           <View style={{ flexDirection: "row" }}>
                              <Text style={{ marginLeft: 25, marginRight: 7 }}>
                                 이지석
                              </Text>
                              <Text style={{ marginRight: 7 }}>조현철</Text>
                              <Text style={{ marginRight: 7 }}>유시은</Text>
                              <Text style={{ marginRight: 7 }}>미투표</Text>
                           </View>
                           <View style={{ flexDirection: "row" }}>
                              <Text style={{ marginLeft: 28, marginRight: 16 }}>
                                 36표
                              </Text>
                              <Text style={{ marginRight: 16 }}>20표</Text>
                              <Text style={{ marginRight: 19 }}>25표</Text>
                              <Text style={{ marginRight: 16 }}>3표</Text>
                           </View>
                           <View
                              style={{ alignItems: "center", marginTop: 12 }}
                           >
                              <View
                                 style={{
                                    flexDirection: "row",
                                 }}
                              >
                                 <Text
                                    style={{ color: "#1957A4", fontSize: 16 }}
                                 >
                                    이지석{" "}
                                 </Text>
                                 <Text style={{ fontSize: 16 }}>
                                    후보님이 당선되었습니다.
                                 </Text>
                              </View>
                           </View>
                        </View>
                     </View>
                  </ScrollView>
                  <View style={styles.PhoneContainer}>
                     <Text style={styles.contentFont}>담당자 번호 : </Text>
                     <Text style={styles.contentFont}>
                        {navigation.state.params.Notice.PhoneNumber}
                     </Text>
                  </View>
               </View>
            </View>
         </View>
      </Background>
   );
};
export default memo(VoteNotice);

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
   },
   fontStyle: {
      fontSize: 24,
      color: "#1957A4",
   },
   contentFont: {
      fontSize: 18,
      marginTop: 5,
   },
   TopContainer: {
      flex: 1,
      justifyContent: "center",
      marginTop: height * 0.03,
      marginBottom: height * 0.03,
   },
   BottomContainer: {
      flex: 5,
      justifyContent: "center",
   },
   PhoneContainer: {
      flex: 1,
      flexDirection: "row",
   },
   card: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      marginTop: height * 0.01,
      marginBottom: height * 0.03,
      width: width * 0.8,
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
   MajorName: {
      textAlign: "center",
      fontSize: 16,
      color: "#1957A4",
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
   },
});
