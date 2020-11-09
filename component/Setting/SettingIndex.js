import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Icon from "react-native-vector-icons/AntDesign";

import FAQ from "./Setting/FAQ/FAQIndex";
import OpenSource from "./Setting/OpenSource/OSIndex";
import Version from "./Setting/Version/VersionIndex";
import AuthLoadingScreen from "./Setting/AuthLoadingScreen";
import OnLogin from "./Setting/OnLogin";
import OffLogin from "./Setting/OffLogin";
import LoginHome from "./Setting/Login/LoginHome";
import Logout from "./Setting/Logout/Logout";
import LoginScreen from "./Setting/Login/LoginScreen";
import RegisterScreen from "./Setting/Login/RegisterScreen";
import ForgotPasswordScreen from "./Setting/Login/ForgotPasswordScreen";

const Router = createStackNavigator(
   {
      OnLogin: {
         screen: OnLogin,
      },
      OffLogin: {
         screen: OffLogin,
      },
      FAQ: {
         screen: FAQ,
      },
      OpenSource: {
         screen: OpenSource,
      },
      Version: {
         screen: Version,
      },
      AuthLoadingScreen: {
         screen: AuthLoadingScreen,
      },
      LoginHome: {
         screen: LoginHome,
      },
      Logout: {
         screen: Logout,
      },
      LoginScreen: {
         screen: LoginScreen,
      },
      RegisterScreen: {
         screen: RegisterScreen,
      },
      ForgotPasswordScreen: {
         screen: ForgotPasswordScreen,
      },
   },
   {
      initialRouteName: "AuthLoadingScreen",
      headerMode: "none",
   }
);
const SettingRouter = createAppContainer(Router);

export default class SettingIndex extends React.Component {
   static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
         <Icon name="setting" size={20} style={{ color: tintColor }} />
      ),
   };
   render() {
      return <SettingRouter />;
   }
}
