import React from "react";
import {
   TouchableOpacity,
   StyleSheet,
   View,
   ScrollView,
   Image,
} from "react-native";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
   deleteButton: {
      borderRadius: 10,
      backgroundColor: "red",
      width: 25,
   },
   editButton: {
      borderRadius: 10,
      backgroundColor: "lightblue",
      width: 25,
   },
});

const Note = (props) => {
   let Pin;

   switch (props.pinValue) {
      case "rdv":
         Pin = require("../../../assets/pinputain.png");
         break;
      case "fetes":
         Pin = require("../../../assets/pinbleueputain.png");
         break;
      case "famille":
         Pin = require("../../../assets/pinverteputain.png");
         break;
      default:
         Pin = require("../../../assets/pinputain.png");
   }

   return (
      <View
         style={{
            margin: 10,
            padding: 4,
            maxHeight: 150,
         }}
      >
         <LinearGradient
            colors={["#fdfcc3", "#f9f68d"]}
            style={{ height: "100%" }}
         >
            <Image
               source={Pin}
               style={{
                  alignSelf: "center",
                  height: 25,
                  width: 30,
               }}
            />
            <Text
               style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  borderRadius: 20,
                  fontWeight: "bold",
                  paddingVertical: 5,
                  textAlign: "center",
               }}
            >
               {props.title}
            </Text>
            <ScrollView>
               <Text style={{ marginVertical: 3 }}>{props.content}</Text>
            </ScrollView>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingVertical: 5,
               }}
            >
               <TouchableOpacity
                  onPress={() => props.toDelete(props.id)}
                  style={styles.deleteButton}
               >
                  <Text> 🗑️ </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  onPress={() =>
                     props.openForm(props.id)
                  } /*onPressOut={() => props.toEdit(props.title, props.content)}*/
                  style={styles.editButton}
               >
                  <Text> 📝 </Text>
               </TouchableOpacity>
            </View>
         </LinearGradient>
      </View>
   );
};
export default Note;
