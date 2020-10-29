import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Sidebar extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.profileContainer}>
                    <View style={styles.profile}>
                        {/* <AntDesign name='rocket1' size={40} color='#05fbcb'/> */}
                        <Image style={{width:50,height:50}} source={require('../../../../assets/HanseiLogo.png')}/>
                        <View style={{marginLeft:12}}>
                            <Text style={{marginLeft:3,opacity:0.6}}>HVP</Text>
                            <Text style={{fontSize:22, color:'white', opacity:0.9}}>로그인</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={_ => this.props.navigation.closeDrawer()}>
                        <Feather 
                            name="x" 
                            size={24} 
                            color="white" 
                            style={{opacity:0.7, padding:3}}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <DrawerNavigatorItems {...this.props}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileContainer : {
        display:"flex", 
        flexDirection:"row",
        justifyContent: "space-between",
        backgroundColor: "#f3b020",
    },
    profile: {
        display:"flex", 
        flexDirection:"row",
        paddingTop: 25,
        paddingLeft: 20,
        paddingBottom: 15,
    },

});