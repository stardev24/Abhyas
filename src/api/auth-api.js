import firebase from "firebase/app";
import "firebase/auth";
//import { GoogleSignin } from '@react-native-community/google-signin';

/*GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: 'AIzaSyBz78cV5GZG4Mtz888wk9fGhEFb3wWVH_o', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});*/

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
          error: "E-mail already in use."
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format."
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
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
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Invalid email address or password."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
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
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const signinWithGmail = async () => {
  debugger

  try {
    const userInfo = await GoogleSignin.signInSilently();
    console.log("---User---",userInfo);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use."
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format."
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};