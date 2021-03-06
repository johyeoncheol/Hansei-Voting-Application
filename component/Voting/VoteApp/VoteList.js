import React, { memo } from "react";
import Button from "../../AppSetting/components/Button";

import Background from "../../AppSetting/background/background2";
import {
   Dimensions,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import BackButton from "../../AppSetting/components/BackButton";

const { width, height } = Dimensions.get("window");

const Register = ({ navigation }) => {
   return (
      <Background>
         <BackButton goBack={() => navigation.navigate("MajorSelect")} />
         <View style={styles.container}>
            <View style={styles.TopContent}>
               <Text style={styles.Majorname}>
                  {navigation.state.params.Majorname}
               </Text>
            </View>
            <View style={styles.card}>
               <ScrollView>
                  <View style={styles.VoteList}>
                     <TouchableOpacity
                        onPress={() => navigation.navigate("DoVote")}
                     >
                        <Text style={styles.VoteListContent}>
                           [총학생회] 총학생회장 투표
                        </Text>
                     </TouchableOpacity>
                  </View>
               </ScrollView>
            </View>
            <Button
               style={{ width: width * 0.65, marginBottom: 30 }}
               mode="contained"
               onPress={() => navigation.navigate("RegisterVote")}
            >
               투표 생성
            </Button>
         </View>
      </Background>
   );
};

export default memo(Register);

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
   },
   TopContent: {
      flex: 1,
      backgroundColor: "white",
      width: width * 0.65,
      alignItems: "center",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
   },
   Majorname: {
      fontSize: 24,
      marginTop: 5,
      color: "#394174",
   },
   card: {
      backgroundColor: "white",
      flex: 10,
      width: width * 0.65,
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
   VoteList: {
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      textAlign: "center",
      color: "#394174",
      fontSize: 30,
      marginTop: 20,
      fontWeight: "200",
   },
   VoteListContent: {
      textAlign: "center",
      fontSize: 17,
      color: "#394174",
      marginTop: 22,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 22,
   },
});
