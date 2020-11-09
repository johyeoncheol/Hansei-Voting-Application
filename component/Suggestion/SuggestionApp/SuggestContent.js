import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../../AppSetting/background/background4";

export default class SuggestContent extends React.Component {
   static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
         <Icon
            name="comment-alert-outline"
            size={20}
            style={{ color: tintColor }}
         />
      ),
   };
   render() {
      return (
         <Background>
            <View Style={styles.container}>
               <StatusBar barStyle="light-content" />
               <Text style={styles.title}>안녕</Text>
            </View>
         </Background>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F23",
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      color: "red",
      fontSize: 30,
      marginTop: 50,
      fontWeight: "400",
   },
});
