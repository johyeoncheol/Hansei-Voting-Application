import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/AntDesign';

import CustomerSupport from "./Setting/CustomerSupport/CSIndex";
import FAQ from './Setting/FAQ/FAQIndex';
import Login from './Setting/Login/loginIndex';
import OpenSource from './Setting/OpenSource/OSIndex';
import Version from './Setting/Version/VersionIndex';
import AuthLoadingScreen from './Setting/SettingScreen/AuthLoadingScreen';
import OnLogin from './Setting/SettingScreen/OnLogin';
import OffLogin from './Setting/SettingScreen/OffLogin';
import Dashboard from './Setting/Login/loginApp/screens/Dashboard'

const Router = createStackNavigator(
    {
        OnLogin:{
            screen:OnLogin
        },
        OffLogin:{
            screen:OffLogin
        },
        CustomerSupport: {
            screen: CustomerSupport
        },
        FAQ: {
            screen: FAQ
        },
        Login: {
            screen: Login
        },
        OpenSource: {
            screen: OpenSource
        },
        Version: {
            screen: Version
        },
        AuthLoadingScreen:{
            screen: AuthLoadingScreen
        },
        Dashboard:{
            screen: Dashboard
        }
    },
    {
        initialRouteName:"AuthLoadingScreen",
        headerMode:"none"
    }
)
const SettingRouter = createAppContainer(Router);

export default class SettingIndex extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='setting' size={20} style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <SettingRouter/>
        )
    }
}
