import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import VoteApp from './VoteApp/VoteApp';
import MajorSelect from './VoteApp/MajorSelect';

import chinese from './VoteApp/Major/chinese';
import chri_edu_coun from './VoteApp/Major/chri_edu_coun';
import com_science from './VoteApp/Major/com_science';
import english from './VoteApp/Major/english';
import ict from './VoteApp/Major/ict';
import indust_securi from './VoteApp/Major/indust_securi';
import inter_manage from './VoteApp/Major/inter_manage';
import inter_tour from './VoteApp/Major/inter_tour';
import interior_architect from './VoteApp/Major/interior_architect';
import media_video_ad from './VoteApp/Major/media_video_ad';
import music from './VoteApp/Major/music';
import nurs_science from './VoteApp/Major/nurs_science';
import performing_arts from './VoteApp/Major/performing_arts';
import police_admin from './VoteApp/Major/police_admin';
import social_welfare from './VoteApp/Major/social_welfare';
import texti_fash_design from './VoteApp/Major/texti_fash_design';
import theology from './VoteApp/Major/theology';
import visual_info_design from './VoteApp/Major/visual_info_design';


const AppStackNavigator = createStackNavigator(
  {
    VoteApp:{
      screen: VoteApp
    },
    MajorSelect:{
      screen: MajorSelect
    },
    // °¢ ÇĞ°ú
    chinese:{
      screen: chinese
    },
    chri_edu_coun:{
      screen:chri_edu_coun
    },
    com_science:{
      screen:com_science
    },
    english:{
      screen:english
    },
    ict:{
      screen:ict
    },
    indust_securi:{
      screen:indust_securi
    },
    inter_manage:{
      screen:inter_manage
    },
    inter_tour:{
      screen:inter_tour
    },
    interior_architect:{
      screen:interior_architect
    },
    media_video_ad:{
      screen:media_video_ad
    },
    music:{
      screen:music
    },
    nurs_science:{
      screen:nurs_science
    },
    performing_arts:{
      screen:performing_arts
    },
    police_admin:{
      screen:police_admin
    },
    social_welfare:{
      screen:social_welfare
    },
    texti_fash_design:{
      screen:texti_fash_design
    },
    theology:{
      screen:theology
    },
    visual_info_design:{
      screen:visual_info_design
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