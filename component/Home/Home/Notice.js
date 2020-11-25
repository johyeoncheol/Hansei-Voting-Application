import React, { memo } from "react";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

import Background from "../../AppSetting/background/background3";
import BackButton from "../../AppSetting/components/BackButton";

const NoticeContent = ({ navigation }) => {
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
                <Text>{navigation.state.params.Notice.Content}</Text>
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
export default memo(NoticeContent);

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
