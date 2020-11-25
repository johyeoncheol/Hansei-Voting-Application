import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Moment from "moment";

const { width, height } = Dimensions.get("window");
export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         timehmmss: this.timehmmss(),
         timeYYMMDD: this.timeYYMMDD(),
      };
   }
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.time}>{this.state.timeYYMMDD}</Text>
            <Text style={styles.time}>{this.state.timehmmss}</Text>
         </View>
      );
   }
   componentDidMount() {
      setInterval(() => {
         this.setState({
            timehmmss: this.timehmmss(),
            timeYYMMDD: this.timeYYMMDD(),
         });
      }, 30);
   }
   timeYYMMDD() {
      return Moment().format("YYYY년 MM월 DD일");
   }
   timehmmss() {
      return Moment().format("h시mm분ss초");
   }
}

const styles = StyleSheet.create({
   time: {
      textShadowColor: "#0AAFE6",
      textShadowOffset: {
         width: 0,
         height: 0,
      },
      textShadowRadius: 10,
      fontSize: 19,
      color: "#1957A4",
   },
   container: {
      flex: 1,
      marginLeft: width * 0.4,
      justifyContent: "center",
   },
});
