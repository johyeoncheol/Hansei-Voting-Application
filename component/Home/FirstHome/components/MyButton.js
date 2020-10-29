import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class MyButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            width: 100,
            height: 100
          }}
        >
          <Text
            style={{
              backgroundColor: "tomato",
              fontSize: 22,
              padding: 10,
              textAlign: "center",
              color: "white",
              fontWeight: "bold"
            }}
          >
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// import React from 'react';
// import {View, TouchableOpacity, Text} from 'react-native'

// export default class MyButton extends React.Component{
//   render(){
//     return(
//       <View style={{alignSelf:'flex-end', textAlign: 'right', marginRight:10}}>
//         <TouchableOpacity
//           onPress={()=>this.props.navigation.navigate('BoardCreate',{
//           createFunc: this.props.createFunc,
//           board: this.props.board
//         })}
//         style={{backgroundColor:'tomato', padding:12}}
//         >
//         <Text style={{fontSize:17,color:'white', fontWeight:'900'}}>
//           {this.props.title}
//         </Text>
//         </TouchableOpacity>
//       </View>
//       )
//     }

//   }
