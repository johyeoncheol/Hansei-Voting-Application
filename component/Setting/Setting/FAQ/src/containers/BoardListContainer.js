import React, { Component } from "react";
import { Text, View } from "react-native";

import BoardList from "../components/BoardList";

class BoardListContainer extends Component {
   render() {
      return <BoardList />;
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
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardListContainer);
