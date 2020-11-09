import React from "react";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import {
   createStackNavigator,
   createAppContainer,
   createBottomTabNavigator,
} from "react-navigation";
import SettingScreen from "./src/screens/SettingScreen";
import BoardCreateScreen from "./src/screens/BoardCreateScreen";

import BoardEditScreen from "./src/screens/BoardEditScreen";

import { Provider } from "react-redux";
import store from "./src/stores";

const defaultNavigationOptions = {
   headerTintColor: "white",
   tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",

      labelStyle: {
         fontSize: 16,
      },
   },
};

const StackNavigator = createStackNavigator({
   Home: {
      screen: HomeScreen,
   },
   Detail: {
      screen: DetailScreen,
   },
   Create: {
      screen: BoardCreateScreen,
   },
   Edit: {
      screen: BoardEditScreen,
   },
});

const TabNavigator = createBottomTabNavigator(
   {
      Home: {
         // screen: HomeScreen,
         screen: StackNavigator,
         navigationOptions: {
            title: "Ȩ",
         },
      },
      Setting: {
         screen: SettingScreen,
      },
   },
   {
      defaultNavigationOptions,
   }
);

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
   return (
      <Provider store={store}>
         <AppContainer />
      </Provider>
   );
}

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// export default class Mypage extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.FontStyle}> your name : Jo HyeonCheol</Text>
//                 <Text style={styles.FontStyle}> grade : 4</Text>
//                 <Text style={styles.FontStyle}> department : ICT</Text>
//                 <Text style={styles.FontStyle}> gender : male</Text>
//                 <Text style={styles.FontStyle}> the content of a suggestion</Text>
//                 <Text style={styles.FontStyle}> 1.tuition fee</Text>
//                 <Text style={styles.FontStyle}> 2.chair installation</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     FontStyle:{
//         fontSize: 24,
//         color: "#158974",
//         marginTop: 30
//     },
//     TopContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center'
//     },
//     MidContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center'
//     },
//     Botcontainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center'
//     }
// });
