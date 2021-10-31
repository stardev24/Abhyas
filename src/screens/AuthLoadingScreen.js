import React, { memo,useEffect } from "react";
import { ActivityIndicator,StyleSheet,Text,AsyncStorage,Image,View } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import Background from "../components/Background";
import { theme } from "../core/theme";
import { FIREBASE_CONFIG } from "../core/config";
import { useDispatch } from 'react-redux'
import {setUser} from "../actions/UserActions"
import { ThemeColors } from "react-navigation";


// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);



const AuthLoadingScreen =  ({ navigation }) => {
  const dispatch = useDispatch();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      console.log("------------>",user)
      debugger
      dispatch(setUser(user))
      navigation.navigate("Dashboard");
      
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });




  return (
    <View style={styles.container}>
        <Text style={styles.loadingTxt}>Abhyas</Text>
        <ActivityIndicator size="large" color={theme.colors.primary}/>
    </View>
  );
};

export default memo(AuthLoadingScreen);

const styles = StyleSheet.create ({
  activityIndicator: {

  },
  loadingTxt:{
    color:theme.colors.primary,
    fontSize:54,
    fontWeight:'bold'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    width: 300,
    height: 400,
  },
})