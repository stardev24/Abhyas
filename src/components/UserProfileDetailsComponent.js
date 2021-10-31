import React, { Component,memo,useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Share,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import { useStore } from 'react-redux'
import { theme } from "../core/theme";
import RNMaterialLetterIcon from 'react-native-material-letter-icon';
import { Container, Header, Input, Button, ListItem, Icon, Left, Body, Right } from 'native-base';
import firebase from "firebase/app";
import "firebase/auth";
import { logoutUser } from "../api/auth-api";


const UserProfile =  () => {
  const store = useStore();
  const storeDetails = store.getState()
  const [phone,setPhone] = useState('')
  const [edit,setEdit] = useState(false)
  const editPhone = () => {
    setEdit(true)
  };
  const onChangeText = (text) =>{
      setPhone(text)
  }
  const savePhone = () =>{

  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Place holder for Abhyas app',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <RNMaterialLetterIcon
                size={150}
                style={styles.avatar} 
                shapeColor={theme.colors.primary}
                letter={storeDetails.userData.userDetails.displayName}
                letterColor={"#ffffff"}
                lettersNumber={2}
                letterSize={48}
                initials={true}
                shapeType={"circle"}
                initialsNumber={2}
            />
            <Text style={styles.name}>{storeDetails.userData.userDetails.displayName}</Text>
        </View>
        <View style={styles.body}>
              
                <ListItem icon>
                    <Left>
                    <Button style={{ backgroundColor:theme.colors.primary }}>
                        <Icon active name="mail" />
                    </Button>
                    </Left>
                    <Body>
                    <Text>{storeDetails.userData.userDetails.email}</Text>
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                    <Button style={{ backgroundColor: theme.colors.primary }}>
                        <Icon active name="phone-portrait" />
                    </Button>
                    </Left>
                    <Body>
                    
                    {
                        edit ? <Input                             
                                value = {phone}
                                keyboardType={"phone-pad"}
                                autoFocus={true}
                                onChangeText={(term) => setPhone(term)}/> :
                    <Text>{storeDetails.userData.userDetails.phoneNumber?storeDetails.userData.userDetails.phoneNumber:'Phone number was not added'}</Text> 
                    
                    }

                    </Body>
                    <Right>
                    {
                    edit?
                    <Text onPress={savePhone} color={theme.colors.primary}>Save</Text>
                    :
                     <Text onPress={editPhone} color={theme.colors.info}>Edit</Text>
                    }
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                    <Button style={{ backgroundColor: theme.colors.primary }}>
                        <Icon active name="checkmark" />
                    </Button>
                    </Left>
                    <Body>
                    <Text>{storeDetails.userData.userDetails.emailVerified?'Verification done':'Email was not verified'}</Text>
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                    <Button style={{ backgroundColor: theme.colors.primary }}>
                        <Icon active name="share" />
                    </Button>
                    </Left>
                    <Body>
                        <Text style={{color: 'blue'}} onPress={onShare}>Share Via Social Media</Text>
                    </Body>                
                </ListItem>
                <ListItem icon>
                    <Left>
                    <Button style={{ backgroundColor: 'red' }}>
                        <Icon active name="power"  />
                    </Button>
                    </Left>
                    <Body>
                        <Text style={{color: 'red'}} onPress={() => logoutUser()}>Logout</Text>
                    </Body>                
                </ListItem>

      </View>
    </View>
 


    )
}

export default memo(UserProfile);

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        justifyContent:'center',
        margin:40
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      marginTop:30,

    },
    name:{
      fontSize:22,
      fontWeight:'600',
      marginTop:10,
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:20,
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
  });
