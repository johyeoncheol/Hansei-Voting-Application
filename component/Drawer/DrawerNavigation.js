import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Home from '../Home/Home';
import Calendar from '../Calendar/Calendar';
import Voting from '../Voting/Voting';
import Suggestion from '../Suggestion/Suggestion';
import Setting from '../Setting/Setting';


import Sidebar from './Sidebar';


const DrawerNavigator = createDrawerNavigator(
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
    },
    {
        contentComponent: props => <Sidebar {...props} />,

        drawerWidth: Dimensions.get('window').width * 0.5,

        contentOptions: {
            activeBackgroundColor: '#deb5f7',
            activeTintColor: '#53115B',
            itemsContainerStyle: {
                marginTop: 16,
                marginHrizontal: 8,
            },
            itemstyle: {
                borderRadius: 4,
            }
        }
    }
);

const Drawer = createAppContainer(DrawerNavigator);

export default function DrawerNavigation() {
    return (
        <Drawer />
    );
};