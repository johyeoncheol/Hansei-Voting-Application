import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "환경설정",
      tabBarIcon: <Ionicons name="md-settings" size={20} color="#ff6666" />
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "tomato", fontSize: 40 }}>
          Setting을 위한 스크린
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});
