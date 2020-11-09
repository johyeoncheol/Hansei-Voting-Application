import React from "react";
import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../../AppSetting/background/background4";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default class Suggestion extends React.Component {
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
               <Image
                  style={styles.suggestionTitle}
                  source={require("../../../assets/suggestioncontent.png")}
               />
               <TouchableOpacity
                  onPress={() =>
                     this.props.navigation.navigate("SuggestContent")
                  }
                  style={styles.button}
               >
                  <Image
                     style={styles.button}
                     source={require("../../../assets/getstarted2.png")}
                  />
               </TouchableOpacity>
            </View>
         </Background>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F23",
   },
   title: {
      color: "red",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "800",
   },
   button: {
      width: width / 1.1,
      resizeMode: "contain",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
   },
   suggestionTitle: {
      width: width * 0.8,
      height: height * 0.4,
      marginLeft: width / 20,
      resizeMode: "contain",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
   },
});
