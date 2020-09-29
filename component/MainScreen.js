import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createDrawerNavigator } from 'react-navigation-drawer';


import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Home from "./Home/Home";
import Calendar from "./Calendar/Calendar";
import Voting from "./Voting/Voting";
import Suggestion from "./Suggestion/Suggestion";
import Setting from "./Setting/Setting";

import Sidebar from './Drawer/Sidebar';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';


const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Calendar: {
        screen: Calendar
    },
    Voting: {
        screen: Voting
    },
    Suggestion: {
        screen: Suggestion
    },
    Setting: {
        screen: Setting
    }
});

const appDrawer = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home",
                drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
            }
        },
        Calendar: {
            screen: Calendar,
            navigationOptions: {
                title: "Calendar",
                drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
            }
        },
        Voting: {
            screen: Voting,
            navigationOptions: {
                title: "Voting",
                drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
            }
        },
        Suggestion: {
            screen: Suggestion,
            navigationOptions: {
                title: "Suggestion",
                drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                title: "Setting",
                drawerIcon: ({ tintColor }) => <Feather name="mail" size={16} color={tintColor} />
            },
        },
        HanseiUniversity:{
            screen:AppTabNavigator,
            navigationOptions:{
                title:""
            }
        },
    },
    {
        
        contentComponent: props => <Sidebar {...props} />,

        drawerWidth: Dimensions.get('window').width * 0.5,
        initialRouteName:'HanseiUniversity',
        contentOptions: {
            activeBackgroundColor: 'white',
            activeTintColor: '#53115B',
            itemsContainerStyle: {
                marginTop: 16,
                marginHrizontal: 8,
            },
            itemstyle: {
                borderRadius: 4,
            }
        }
    },
)

const App = createAppContainer(appDrawer);

export default class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => (
                <View>
                    <Image style={{ height: 50, width: 200, resizeMode: "contain" }} source={require('../assets/title.png')}></Image>
                </View>),
            headerRight: () => (<Icon name='user' size={25} onPress={() => navigation.navigate('User')} style={{ paddingRight: 15 }} />)
        }
    }
    render() {
        return (
            <App />
        );
    }

}
