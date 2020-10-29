import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Home from "../../../Home/Home";
import Calendar from "../../../Calendar/Calendar";
import VoteApp from "../../../Voting/Vote_index";
import Suggestion from "../../../Suggestion/Suggestion_index";
import Setting from "../../../Setting/SettingIndex";

const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "홈",
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            title: "일정",
        }
    },
    Voting: {
        screen: VoteApp,
        navigationOptions: {
            title: "투표하기",
        }
    },
    Suggestion: {
        screen: Suggestion,
        navigationOptions: {
            title: "건의함",
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            title: "설정",
        },
    },
});

export default createAppContainer(AppTabNavigator);
