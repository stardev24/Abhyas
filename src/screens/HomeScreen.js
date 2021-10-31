import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Carousel from 'react-native-carousel-view';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image
} from 'react-native';
import { Paragraph } from "react-native-paper";
const HomeScreen = ({ navigation }) => (

  <Background>
     <Image source={require('../assets/land.png')} style={styles.image} />
    <Header>Welcome to Abhyas</Header>
    <Paragraph style={{justifyContent: 'center'}}>
        This is a placeholder to explain more details about APP
    </Paragraph>

    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")} style={{marginTop:60}}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>    
  </Background>

);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
  },
  image: {
    width: 385,
    height: 400,
    marginBottom: 12,
  },
});

export default memo(HomeScreen);
