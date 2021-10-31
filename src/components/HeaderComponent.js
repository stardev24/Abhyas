import React, { Component } from 'react'
import { Header, Left, Body, Right,Title  } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, Text, View } from 'react-native';

export default class HeaderComponent extends Component {
  render() {
    return (

        <Header hasTabs style={styles.header}>
          <Left />
          <Body style={styles.adjust}>
            <Title>Insider</Title>
          </Body>
          <Right style={styles.adjust}/>
        </Header>

    )
  }
}

const styles = StyleSheet.create({
    header: {
      paddingTop: getStatusBarHeight(),
      height: 34 + getStatusBarHeight(),
      backgroundColor:'#18ffff'
    },
    adjust:{
      flex:1
    }
  });