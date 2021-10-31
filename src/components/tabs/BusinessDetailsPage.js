import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem,Text, Left, Body, Right, Spinner } from 'native-base';
import {Image} from 'react-native'
export default class BusinessDetailsScreen extends Component {

  constructor(props){
      super(props)
  }  
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content>
        {
            this.props.navigation?
            <Card style={{flex: 0}}>
            <CardItem cardBody>
              <Image source={{uri: navigation.getParam("item").avatar}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Body>
                  <Text>First Name</Text>
                  <Text>{navigation.getParam("item").first_name}</Text>
                </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Last Name</Text>
                <Text>
                {navigation.getParam("item").last_name}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Email</Text>
                <Text>
                    {navigation.getParam("item").email}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>User ID</Text>
                <Text>
                {navigation.getParam("item").id.toString()}
                </Text>
              </Body>
            </CardItem>
          </Card>:
          <Spinner color='blue' />

        }
          
        </Content>
      </Container>
    );
  }
}