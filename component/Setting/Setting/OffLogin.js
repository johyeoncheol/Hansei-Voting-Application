import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

export default class OffLogin extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.TextContainer}>
               <Text style={styles.textFont}>로그인</Text>
            </View>
            <View style={styles.RestContainer}>
               <View style={styles.Login}>
                  <Icon name="lock" size={20} style={{ marginRight: 10 }} />
                  <Text style={styles.TouchFont}>로그인 정보</Text>
               </View>
               <View style={styles.LoginDo}>
                  <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("LoginHome")}
                     style={{ flexDirection: "row" }}
                  >
                     <Text style={styles.TouchFont}>로그인</Text>
                     <Icon
                        name="chevron-right"
                        size={20}
                        style={{ marginLeft: 10 }}
                     />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.TextContainer}>
               <Text style={styles.textFont}>고객지원</Text>
            </View>
            <View style={styles.RestContainer}>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("FAQ")}
                  style={{ flexDirection: "row" }}
               >
                  <Icon
                     name="help-circle"
                     size={20}
                     style={{ marginRight: 10 }}
                  />
                  <Text style={styles.TouchFont}>한세Voting FAQ</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.RestContainer}>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("OpenSource")}
                  style={{ flexDirection: "row" }}
               >
                  <Icon name="feather" size={20} style={{ marginRight: 10 }} />
                  <Text style={styles.TouchFont}>오픈소스 라이선스</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.RestContainer}>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Version")}
                  style={{ flexDirection: "row" }}
               >
                  <Icon
                     name="alert-circle"
                     size={20}
                     style={{ marginRight: 10 }}
                  />
                  <Text style={styles.TouchFont}>Version 정보</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.VacantContainer}></View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   Login: {
      flex: 8,
      flexDirection: "row",
   },
   LoginDo: {
      flex: 2,
      flexDirection: "row",
      marginRight: 15,
   },
   TextContainer: {
      flex: 1,
      backgroundColor: "#D8D8D8",
      borderBottomWidth: 1,
      borderBottomColor: "#FAFAFA",
   },
   RestContainer: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#FAFAFA",
      marginLeft: 15,
      marginTop: 15,
      flexDirection: "row",
   },
   VacantContainer: {
      flex: 7,
   },
   textFont: {
      color: "#1917A4",
      fontSize: 16,
      marginLeft: 9,
      marginTop: 9,
   },
   TouchFont: {
      color: "black",
      fontSize: 16,
   },
});
