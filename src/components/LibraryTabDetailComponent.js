import React, { Component } from 'react';
import { StyleSheet,View,ScrollView, Image, Dimensions } from 'react-native';
import { Container, Header, Content, Thumbnail, Tabs,Left, Body, Right, Card, Icon, CardItem,List,ListItem,Text  } from 'native-base';
import TechnologyPage from './tabs/TechnologyPage';
import HeaderComponent from './HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-controls';
import { theme } from '../core/theme';
import AdMob from './AdMob'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import HTMLView from 'react-native-htmlview';
import ImageModal from 'react-native-image-modal';


export default class LibraryTabDetailComponent extends Component {

  constructor(props){
    super(props);

  }

  render() {

    return (
      <View>

          <ScrollView>
            <List dataArray={this.props.businessPosts.items}
                renderRow={(item,i) =>
                    <Card key={i}>
                        <CardItem header>
                        <Text>{item.fields.title}</Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            
                            <HTMLView
                                value={documentToHtmlString(item.fields.post)}
                                stylesheet={styles}
                            />
                            
                        </Body>
                        </CardItem>
                        <CardItem footer>

                        <ImageModal
                                resizeMode="contain"
                                imageBackgroundColor="#000000"
                                style={{
                                width: 150,
                                height: 150,
                                }}
                                source={{
                                uri: this.props.businessPosts.includes?
                            `https:${this.props.businessPosts.includes.Asset.filter(obj => item.fields.documents.sys.id == obj.sys.id)[0].fields.file.url}`:''
                                }}
                        />
                            
                        </CardItem>
                    </Card>
                }
                keyExtractor={(item,index) => `key-${index}`}>
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
