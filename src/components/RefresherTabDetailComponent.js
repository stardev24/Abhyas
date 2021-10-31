import React, { Component } from 'react';
import { StyleSheet,View,ScrollView} from 'react-native';
import { Container, Header, Content, Thumbnail, Tabs,Left, Body, Right, Button, Icon, Title,List,ListItem,Text  } from 'native-base';
import TechnologyPage from './tabs/TechnologyPage';
import HeaderComponent from './HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-controls';
import { theme } from '../core/theme';
import AdMob from './AdMob'
import YouTubePlayer from "react-native-youtube-sdk";


export default class RefresherTabDetailComponent extends Component {

  constructor(props){
    super(props);

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
                    <YouTubePlayer
                        ref={ref => (this.youTubePlayer = ref)}
                        videoId={item.fields.youtubeUrl}
                        autoPlay={false}
                        fullscreen={false}
                        showFullScreenButton={true}
                        showSeekBar={true}
                        showPlayPauseButton={true}
                        startTime={1}
                        style={{ width: "100%", height: 200 }}
                        onReady={e => console.log("onReady", e.type)}
                        onError={e => console.log("onError", e.error)}
                        onChangeState={e => console.log("onChangeState", e.state)}
                        onChangeFullscreen={e => console.log("onChangeFullscreen", e.isFullscreen)}
                    />
                        <Text>{item.fields.title}</Text>
                    </Body>
                    <Right>

                    </Right>
                  </ListItem>
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
