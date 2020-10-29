import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment'
import Dates from 'react-native-dates';
import Icon from 'react-native-vector-icons/AntDesign';

import ScheduleApp from './ScheduleList/ScheduleList';


export default class App extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='calendar' size={20} style={{ color: tintColor }} />
    )
  }
  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null
  }

  render() {
    const isDateBlocked = (date) =>
      date.format('dddd') === 'Sunday';

    const onDatesChange = ({ startDate, endDate, focusedInput }) =>
      this.setState({ ...this.state, focus: focusedInput }, () =>
        this.setState({ ...this.state, startDate, endDate })
      );

    const onDateChange = ({ date }) =>
      this.setState({ ...this.state, date });


    return (
      <View style={styles.container}>
        <View stle={styles.Calendar}>
          <Dates
            onDatesChange={onDatesChange}
            isDateBlocked={isDateBlocked}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            focusedInput={this.state.focus}
            focusedMonth={moment('05/09/2030', 'DD/MM/YYYY')} //optional
            range
          />
          {/* {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>} */}
          {/* <Text style={[styles.date, this.state.focus === 'startDate' && styles.focused]}>{this.state.startDate && this.state.startDate.format('LL')}</Text> */}
          <Text style={[styles.date, this.state.focus === 'endDate' && styles.focused]}>{this.state.endDate && this.state.endDate.format('LL')}</Text>
        </View>
        <View style={styles.Schedule}>
          <ScheduleApp />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  Calendar: {
    flex: 4
  },
  Schedule: {
    flex: 6,
  },
  date: {
    marginTop: 10
  },
  focused: {
    color: 'blue'
  }
});


// import React from "react";
// import {StyleSheet, Text, View} from "react-native";
// import { StatusBar } from "expo-status-bar";
// import Icon from 'react-native-vector-icons/AntDesign';

// export default class Calendar extends React.Component{
//     static navigationOptions = {
//         tabBarIcon: ({ tintColor }) => (
//             <Icon name='calendar' size={20} style={{ color: tintColor }} />
//         )
//     }
//     render(){
//         return(
//             <View Style={styles.container}>
//                 <StatusBar barStyle="light-content"/>
//                 <Text style={styles.title}>Calendar</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:"#F23",
//         alignItems:"center",
//         justifyContent:"center"
//     }, 
//     title:{
//         color:"red",
//         fontSize:30,
//         marginTop:50,
//         fontWeight:"400"
//     }
// })