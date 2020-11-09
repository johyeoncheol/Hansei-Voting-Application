import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Suggestion from "./SuggestionApp/Suggestion";
import SuggestContent from "./SuggestionApp/SuggestContent";

const AppStackNavigatior = createStackNavigator(
   {
      Suggestion: {
         screen: Suggestion,
      },
      SuggestContent: {
         screen: SuggestContent,
      },
   },
   {
      initialRouteName: "Suggestion",
   }
);

const AppContainer = createAppContainer(AppStackNavigatior);

export default class Suggestion_index extends React.Component {
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
      return <AppContainer />;
   }
}
