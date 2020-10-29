import React, { memo } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("OnLogin");
    } else {
      // User is not logged in
      navigation.navigate("OffLogin");
    }
  });
};

export default memo(AuthLoadingScreen);
