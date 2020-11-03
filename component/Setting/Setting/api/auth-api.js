import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "이미 사용중인 이메일입니다."
        };
      case "auth/invalid-email":
        return {
          error: "이메일 형식이 유효하지 않습니다."
        };
      case "auth/weak-password":
        return {
          error: "패스워드가 너무 짧습니다."
        };
      case "auth/too-many-requests":
        return {
          error: "요청이 많습니다. 다시 시도 부탁드립니다."
        };
      default:
        return {
          error: "인터넷 연결이 되어있지 않습니다."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "이메일 형식이 유효하지 않습니다."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "이메일 또는 패스워드가 유효하지 않습니다."
        };
      case "auth/too-many-requests":
        return {
          error: "요청이 많습니다. 다시 시도 부탁드립니다."
        };
      default:
        return {
          error: "인터넷 연결이 되어있지 않습니다."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "이메일 형식이 유효하지 않습니다."
        };
      case "auth/user-not-found":
        return {
          error: "유저 이메일이 존재하지 않습니다."
        };
      case "auth/too-many-requests":
        return {
          error: "요청이 많습니다. 다시 시도 부탁드립니다."
        };
      default:
        return {
          error: "인터넷 연결이 되어있지 않습니다."
        };
    }
  }
};
