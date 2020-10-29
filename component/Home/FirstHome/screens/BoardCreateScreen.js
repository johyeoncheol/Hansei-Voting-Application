import React from "react";
import { View, Text, TextInput } from "react-native";
import MyButton from "../components/MyButton";

export default class BoardCreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      contennt: ""
    };
  }

  submitBoard() {
    const createFunc = this.props.navigation.getParam("createFunc");
    const boardItem = {
      title: this.state.title,
      content: this.state.content
    };
    createFunc(boardItem);
    return this.props.navigation.navigate("Home");
  }

  render() {
    return <BoardCreateScreen />;
  }
}
