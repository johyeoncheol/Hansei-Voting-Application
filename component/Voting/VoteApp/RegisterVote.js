import React, { memo, useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   Dimensions,
   Alert,
} from "react-native";
import BackButton from "../../AppSetting/components/BackButton";
import Button from "../../AppSetting/components/Button";
import TextInput from "../../AppSetting/components/TextInput2";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const RegisterVote = ({ navigation }) => {
   const [sd, setSd] = React.useState(new Date());
   const [sdShow, setSdShow] = React.useState(false);
   const [sdMode, setSdMode] = React.useState("date");
   const [dl, setDl] = React.useState(
      new Date(new Date().setHours(sd.getHours() + 7))
   );
   const [dlShow, setDlShow] = React.useState(false);
   const [dlMode, setDlMode] = React.useState("date");

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
      console.log(selectedDate);
      console.log(event);
   };

   const dateformat = (date) =>
      `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
   const timeformat = (time) => `${time.getHours()}시 ${time.getMinutes()}분`;

   const _setSd = (e, changeDate) => {
      changeDate = changeDate || sd;
      if (Platform.OS !== "ios") setSdShow(false);

      if (sdMode === "time") {
         changeDate = new Date(
            new Date(changeDate).setFullYear(
               sd.getFullYear(),
               sd.getMonth(),
               sd.getDate()
            )
         );
      }

      if (changeDate < new Date()) {
         Alert.alert("과거의 시간을 선택할 수 없습니다.");
         return;
      }
      setSd(changeDate);
      const newDl = new Date(changeDate);
      setDl(new Date(newDl.setHours(newDl.getHours() + 7)));
   };

   const _setSdMode = (changeMode) => {
      setSdShow(true);
      setSdMode(changeMode);
   };

   const _setDl = (e, changeDate) => {
      changeDate = changeDate || dl;
      if (Platform.OS !== "ios") setDlShow(false);

      if (dlMode === "time") {
         changeDate = new Date(
            new Date(changeDate).setFullYear(
               dl.getFullYear(),
               dl.getMonth(),
               dl.getDate()
            )
         );
      }

      if (changeDate <= sd) {
         Alert.alert("시작시간 이후의 시간을 선택해주세요.");
         return;
      }
      setDl(changeDate);
   };

   const _setDlMode = (changeMode) => {
      setDlShow(true);
      setDlMode(changeMode);
   };

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
                  <View style={styles.StartContent}>
                     <Text style={styles.textfont}>시작시간 설정</Text>
                     <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                           style={styles.timeButton}
                           onPress={() => _setSdMode("date")}
                        >
                           <Text>{dateformat(sd)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={styles.timeButton}
                           onPress={() => _setSdMode("time")}
                        >
                           <Text>{timeformat(sd)}</Text>
                           {/* <Text>{sd.toLocaleTimeString()}</Text> */}
                        </TouchableOpacity>
                     </View>
                     {sdShow && (
                        <DateTimePicker
                           value={sd}
                           mode={sdMode}
                           is24Hour={true}
                           display="spinner"
                           onChange={_setSd}
                           maximumDate={
                              new Date(
                                 new Date().setDate(new Date().getDate() + 7)
                              )
                           }
                           minimumDate={new Date()}
                        />
                     )}
                  </View>
                  <View style={styles.StartContent}>
                     <Text style={styles.textfont}>마감시간 설정</Text>
                     <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                           style={styles.timeButton}
                           onPress={() => _setDlMode("date")}
                        >
                           <Text>{dateformat(dl)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={styles.timeButton}
                           onPress={() => _setDlMode("time")}
                        >
                           <Text>{timeformat(dl)}</Text>
                           {/* <Text>{dl.toLocaleTimeString()}</Text> */}
                        </TouchableOpacity>
                     </View>
                     {dlShow && (
                        <DateTimePicker
                           value={dl}
                           mode={dlMode}
                           is24Hour={true}
                           display="spinner"
                           onChange={_setDl}
                           maximumDate={
                              new Date(new Date().setDate(sd.getDate() + 7))
                           }
                           minimumDate={sd}
                        />
                     )}
                  </View>
               </ScrollView>
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
      marginTop: 15,
   },
   StartContent: {
      marginBottom: height * 0.03,
   },
   textfont: {
      fontSize: 15,
      color: "#1957A4",
   },
   timeButton: {
      marginLeft: width * 0.04,
      marginRight: width * 0.07,
      marginTop: height * 0.015,
   },
   timeText: {
      marginBottom: height * 0.02,
   },
});

// import React, { memo, useState } from "react";
// import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
// import BackButton from "../../AppSetting/components/BackButton";
// import Button from "../../AppSetting/components/Button";
// import TextInput from "../../AppSetting/components/TextInput2";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { TouchableOpacity } from "react-native-gesture-handler";

// import moment from "moment";

// const { width, height } = Dimensions.get("window");

// const RegisterVote = ({ navigation }) => {
//    const [date, setDate] = useState(new Date());
//    const [mode, setMode] = useState("date");
//    const [show, setShow] = useState(false);

//    const onChange = (event, selectedDate) => {
//       const currentDate = selectedDate || date;
//       setShow(Platform.OS === "ios");
//       setDate(currentDate);
//       console.log(selectedDate);
//       console.log(event);
//    };

//    const showMode = (currentMode) => {
//       setShow(true);
//       setMode(currentMode);
//    };

//    const showDatepicker = () => {
//       showMode("date");
//    };

//    const showTimepicker = () => {
//       showMode("time");
//    };
//    return (
//       <>
//          <View style={styles.container}>
//             <View style={styles.card}>
//                <BackButton goBack={() => navigation.navigate("VoteList")} />
//                <ScrollView>
//                   <View style={styles.TopContent}>
//                      <Text style={styles.textfont}>투표 제목</Text>
//                      <TextInput
//                         style={styles.textIn}
//                         label="제목을 입력해주세요"
//                         returnKeyType="done"
//                      />
//                      <Text style={styles.textfont}>투표 항목</Text>
//                      <TextInput
//                         style={styles.textIn}
//                         returnKeyType="next"
//                         label="투표 항목1"
//                      ></TextInput>
//                      <TextInput
//                         style={styles.textIn}
//                         returnKeyType="next"
//                         label="투표 항목2"
//                      ></TextInput>
//                      <View style={{ flexDirection: "row" }}>
//                         <Button
//                            style={{
//                               width: width * 0.3,
//                               marginBottom: 15,
//                               marginRight: width * 0.04,
//                               marginLeft: width * 0.03,
//                            }}
//                            mode="contained"
//                         >
//                            항목 추가
//                         </Button>
//                         <Button
//                            style={{ width: width * 0.3, marginBottom: 15 }}
//                            mode="contained"
//                         >
//                            항목 삭제
//                         </Button>
//                      </View>
//                   </View>
//                   <View style={styles.StartContent}>
//                      <TouchableOpacity
//                         style={styles.TimeButton}
//                         onPress={showDatepicker}
//                      >
//                         <Text style={styles.textfont}>시작날짜 설정</Text>
//                         <Text>{moment().format("YYYY-MM-DD")}</Text>
//                      </TouchableOpacity>
//                      <TouchableOpacity
//                         style={styles.TimeButton}
//                         onPress={showTimepicker}
//                      >
//                         <Text style={styles.textfont}>시작시간 설정</Text>
//                         <Text>{moment().format("h : mm")}</Text>
//                      </TouchableOpacity>
//                      {show && (
//                         <DateTimePicker
//                            value={date}
//                            mode={mode}
//                            is24Hour={true}
//                            display="spinner"
//                            onChange={onChange}
//                         />
//                      )}
//                   </View>
//                   <View style={styles.StartContent}>
//                      <TouchableOpacity
//                         style={styles.TimeButton}
//                         onPress={showDatepicker}
//                      >
//                         <Text style={styles.textfont}>마감날짜 설정</Text>
//                         <Text>{moment().format("YYYY-MM-DD")}</Text>
//                      </TouchableOpacity>
//                      <TouchableOpacity
//                         style={styles.TimeButton}
//                         onPress={showTimepicker}
//                      >
//                         <Text style={styles.textfont}>마감시간 설정</Text>
//                         <Text>{moment().format("h : mm")}</Text>
//                      </TouchableOpacity>
//                      {show && (
//                         <DateTimePicker
//                            value={date}
//                            mode={mode}
//                            is24Hour={true}
//                            display="spinner"
//                            onChange={onChange}
//                         />
//                      )}
//                   </View>
//                </ScrollView>
//                <Button
//                   style={{
//                      width: width * 0.64,
//                      marginBottom: 30,
//                      marginLeft: width * 0.03,
//                   }}
//                   mode="contained"
//                   onPress={() => navigation.navigate("VoteList")}
//                >
//                   {" "}
//                   저장 하기{" "}
//                </Button>
//             </View>
//          </View>
//       </>
//    );
// };

// export default memo(RegisterVote);

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       alignItems: "center",
//    },
//    card: {
//       backgroundColor: "white",
//       flex: 1,
//       alignItems: "center",
//       width: width * 0.95,
//       borderTopLeftRadius: 10,
//       borderTopRightRadius: 10,
//       borderBottomLeftRadius: 10,
//       borderBottomRightRadius: 10,
//       ...Platform.select({
//          ios: {
//             shadowOpacity: 0.5,
//             shadowColor: "rgb(50,50,50)",
//             shadowRadius: 5,
//             shadowOffset: {
//                height: -1,
//                width: 0,
//             },
//          },
//          android: {
//             elevation: 3,
//          },
//       }),
//    },
//    textIn: {
//       width: width * 0.64,
//       marginLeft: width * 0.03,
//       height: 40,
//       fontSize: 12,
//    },
//    TopContent: {
//       marginTop: 15,
//    },
//    StartContent: {
//       flexDirection: "row",
//       marginBottom: height * 0.08,
//    },
//    textfont: {
//       fontSize: 15,
//       color: "#1957A4",
//    },
//    TimeButton: {
//       marginRight: width * 0.05,
//       marginLeft: width * 0.05,
//       flexDirection: "column",
//    },
// });
