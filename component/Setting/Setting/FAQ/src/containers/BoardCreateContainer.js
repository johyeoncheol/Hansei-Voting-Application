import React from "react";
import { View, Text, TextInput } from "react-native";
import MyButton from "../components/MyButton";

import { createBoard } from "../stores/actions";
import { withNavigation } from "react-navigation";

class BoardCreateContainer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: "",
         contennt: "",
      };
   }

   submitBoard() {
      this.props.creteBoard(this.state.title, this.state.content);
      return this.props.navigation.navigate("Home");
   }

   render() {
      return (
         <View>
            <Text style={{ fontSize: 30, color: "blue", textAlign: "center" }}>
               글 작성 스크린
            </Text>

            <TextInput
               style={{
                  borderWidth: 1,
                  fontSize: 20,
                  height: 50,
                  margin: 20,
                  marginTop: 30,
               }}
               placeholder="제목"
               onChangeText={(text) => this.setState({ title: text })}
            />
            <TextInput
               style={{
                  borderWidth: 1,
                  minHeight: 300,
                  fontSize: 20,
                  margin: 20,
                  marginTop: 30,
               }}
               placeholder="내용"
               multiline={true}
               onChangeText={(text) => this.setState({ content: text })}
            />
            <View style={{ margin: 20, alignSelf: "flex-end" }}>
               <MyButton
                  title="제출하기"
                  onPress={this.submitBoard.bind(this)}
               />
            </View>
         </View>
      );
   }
}

// State를 Props로 바로 전달
const mapStateToProps = (state) => {
   return {
      board: state.board,
   };
};

// Action Creator를 전달
const mapDispatchToProps = (dispatch) => {
   return {
      createBoard: (title, content) => dispatch(createBoard(title, content)),
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withNavigation(BoardCreateContainer));
