import React from "react";

import { View, Text, TextInput } from "react-native";
import MyButton from "../components/MyButton";

export default class BoardEditScreen extends React.Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam("item");

    this.state = {
      key: item.key,
      title: item.title,
      content: item.content
    };
  }

  submitEditBoard() {
    const editFunc = this.props.navigation.getParam("editFunc");

    const key = this.state.key;
    const title = this.state.title;
    const content = this.state.content;
    editFunc(key, title, content);

    return this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, color: "red", textAlign: "center" }}>
          수정
        </Text>

        <TextInput
          placeholder="제목"
          style={{
            borderWidth: 1,
            margin: 10,
            fontSize: 20
          }}
          value={this.state.title}
          onChangeText={text => this.setState({ title: text })}
        />
        <TextInput
          placeholder="내용"
          style={{
            borderWidth: 1,
            margin: 10,
            fontSize: 20,
            height: 400
          }}
          multiline={true}
          value={this.state.content}
          onChangeText={text => this.setState({ content: text })}
        />
        <MyButton onPress={this.submitEditBoard.bind(this)} title="수정" />
      </View>
    );
  }
}
