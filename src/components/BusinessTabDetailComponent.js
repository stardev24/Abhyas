import React, { Component } from 'react';
import { StyleSheet,View,ScrollView} from 'react-native';
import { Container, Header, Content, Thumbnail, Tabs,Left, Body, Right, Button, Icon, Title,List,ListItem,Text  } from 'native-base';
import TechnologyPage from './tabs/TechnologyPage';
import HeaderComponent from './HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tts from 'react-native-tts';
import { theme } from '../core/theme';
import AdMob from './AdMob'



export default class BusinessTabDetailComponent extends Component {

  constructor(props){
    super(props);
    Tts.setDefaultLanguage('en-IN');
    Tts.addEventListener('tts-start', event => console.log('start', event));
    Tts.addEventListener('tts-finish', event => console.log('finish', event));
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    this.navigate = this.navigate.bind(this);
    this.playSentence = this.playSentence.bind(this);
    this.state={playid:''}
  }
  navigate(item){
    this.props.redirectToScreen(item);
  }

  playSentence(event,text){
    console.log("event target -->",event.target.id)
    Tts.stop();
    Tts.speak(text);
  }

  render() {
    return (
      <View>

          <ScrollView>
            <List dataArray={this.props.businessPosts}
                renderRow={(item,i) =>
                  <ListItem thumbnail key={i}>
                  <Left>
                
                  </Left>
                    <Body>
                        <Text>{item.fields.telugu}</Text>
                        <Text>{item.fields.title} </Text>
                    </Body>
                    <Right>
                        <Ionicons name="ios-volume-low" id={i} color="#00E0C7" size={40} onPress={(event)=>this.playSentence(event,item.fields.title)}/>                     
                    </Right>
                  </ListItem>
                }
                keyExtractor={(item,index) => `keyex-${index}`}>
              </List>
              </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  btnColor:{
    backgroundColor:'#673ab7'
  }
});
