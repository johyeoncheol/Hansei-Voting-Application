import React from "react";

import AppTabNavigator from "./BottomNavi/BottomTab";

import Home from "../../Home/Home_index";
import Calendar from "../../Calendar/Calendar";
import VoteApp from "../../Voting/Vote_index";
import Suggestion from "../../Suggestion/Suggestion_index";
import Setting from "../../Setting/SettingIndex";

import Sidebar from "./DrawerNavi/Sidebar";
import { Feather } from "@expo/vector-icons";

import HomeIcon from "react-native-vector-icons/Fontisto";
import CalendarIcon from "react-native-vector-icons/AntDesign";
import VoteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SuggestionIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SettingIcon from "react-native-vector-icons/AntDesign";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

const appDrawer = createDrawerNavigator(
   {
      Home: {
         screen: Home,
         navigationOptions: {
            title: "홈",
            drawerIcon: ({ tintColor }) => (
               <HomeIcon name="home" size={16} style={{ color: tintColor }} />
            ),
         },
      },
      Calendar: {
         screen: Calendar,
         navigationOptions: {
            title: "일정",
            drawerIcon: ({ tintColor }) => (
               <CalendarIcon
                  name="calendar"
                  size={16}
                  style={{ color: tintColor }}
               />
            ),
         },
      },
      Voting: {
         screen: VoteApp,
         navigationOptions: {
            title: "투표하기",
            drawerIcon: ({ tintColor }) => (
               <VoteIcon name="vote" size={16} style={{ color: tintColor }} />
            ),
         },
      },
      Suggestion: {
         screen: Suggestion,
         navigationOptions: {
            title: "건의함",
            drawerIcon: ({ tintColor }) => (
               <SuggestionIcon
                  name="comment-alert-outline"
                  size={16}
                  style={{ color: tintColor }}
               />
            ),
         },
      },
      Setting: {
         screen: Setting,
         navigationOptions: {
            title: "설정",
            drawerIcon: ({ tintColor }) => (
               <SettingIcon
                  name="setting"
                  size={16}
                  style={{ color: tintColor }}
               />
            ),
            headerTitle: () => (
               <View>
                  <Text style={{ fontSize: 20 }}>설정</Text>
               </View>
            ),
         },
      },
      HanseiUniversity: {
         screen: AppTabNavigator,
         navigationOptions: {
            title: "",
         },
      },
   },
   {
      contentComponent: (props) => <Sidebar {...props} />,

      drawerWidth: Dimensions.get("window").width * 0.5,

      initialRouteName: "HanseiUniversity",
      contentOptions: {
         activeBackgroundColor: "white",
         activeTintColor: "#53115B",
         itemsContainerStyle: {
            marginTop: 16,
            marginHrizontal: 8,
         },
         itemstyle: {
            borderRadius: 4,
         },
      },
   }
);

export default createAppContainer(appDrawer);
