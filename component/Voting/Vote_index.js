import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import VoteApp from './VoteApp/VoteApp';
import MajorSelect from './VoteApp/MajorSelect';

const AppStackNavigator = createStackNavigator(
  {
    VoteApp:{
      screen: VoteApp
    },
    MajorSelect:{
      screen: MajorSelect
    },
  },
  {
    initialRouteName:'VoteApp'
  }
)

const AppContainer = createAppContainer(AppStackNavigator);

export default class Voting extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='vote' size={20} style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <AppContainer/>
        )
    }
}