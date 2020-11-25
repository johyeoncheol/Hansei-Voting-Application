import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import VoteHome from "./VoteApp/VoteHome";
import MajorSelect from "./VoteApp/MajorSelect";
import VoteList from "./VoteApp/VoteList";
import RegisterVote from "./VoteApp/RegisterVote";
import DoVote from "./VoteApp/DoVote";

const AppStackNavigator = createStackNavigator(
   {
      VoteHome: {
         screen: VoteHome,
      },
      MajorSelect: {
         screen: MajorSelect,
      },
      VoteList: {
         screen: VoteList,
      },
      RegisterVote: {
         screen: RegisterVote,
      },
      DoVote: {
         screen: DoVote,
      },
   },
   {
      initialRouteName: "VoteHome",
   }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default class Voting extends React.Component {
   static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
         <Icon name="vote" size={20} style={{ color: tintColor }} />
      ),
   };
   render() {
      return <AppContainer />;
   }
}
