import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./Home/Home";
import Notice from "./Home/Notice";
import VoteNotice from "./Home/VoteNotice";

const AppStackNavigatior = createStackNavigator(
   {
      Home: {
         screen: Home,
      },
      Notice: {
         screen: Notice,
      },
      VoteNotice: {
         screen: VoteNotice,
      },
   },
   {
      initialRouteName: "Home",
   }
);

const AppContainer = createAppContainer(AppStackNavigatior);

export default class Suggestion_index extends React.Component {
   static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
         <Icon name="home" size={20} style={{ color: tintColor }} />
      ),
   };
   render() {
      return <AppContainer />;
   }
}
