import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./component/MainScreen";
import User from "./component/User/user";

import firebase from "./firebase";

const AppStackNavigator = createStackNavigator({
   MainScreen: {
      screen: MainScreen,
   },
   User: {
      screen: User,
   },
});

export default createAppContainer(AppStackNavigator);
