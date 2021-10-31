import React, { Component } from 'react'
import { Text, View,Container,Content } from 'react-native'

export default class TechnologyPage extends Component {
  static navigationOptions = {
    headerTitle: 'Technology',
    headerTitleStyle: {
      color: 'white'
    }
  };
  render() {
    return (
           <Text> TechnologyPage </Text>
    )
  }
}
