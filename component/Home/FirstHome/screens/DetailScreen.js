import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold"
          }}
        >
          상세페이지!
        </Text>

        <Text style={styles.title}>
          {this.props.navigation.getParam("item").title}
        </Text>
        <Text style={styles.content}>
          {this.props.navigation.getParam("item").content}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 20,
    fontWeight: "900"
  },
  content: {
    fontSize: 20,
    margin: 20
  }
});
