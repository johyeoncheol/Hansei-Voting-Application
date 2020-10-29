import React, { Component } from 'react';
import { View, Image} from 'react-native';

import NaviApp from './AppSetting/Navigation/NavigationApp';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class MainScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => (
                <View>
                    <Image style={{ height: 50, width: 200, resizeMode: "contain" }}
                     source={require('../assets/title.png')}></Image>
                </View>),
            headerRight: () => (<Icon name='user' size={25} 
            onPress={() => navigation.navigate('User')} style={{ paddingRight: 15 }} />)
        }
    }
    render() {
        return (
            <NaviApp />
        );
    }
}