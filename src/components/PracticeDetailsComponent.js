import React, { Component } from 'react';
import { StyleSheet,View,ScrollView,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Thumbnail, Tabs,Left, Body, Right, Button, Icon, Title,List,ListItem,Text  } from 'native-base';
import CardFlip from 'react-native-card-flip';
import Carousel from 'react-native-snap-carousel';
import { theme } from "../core/theme";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default class PracticeTabDetailComponent extends Component {

  constructor(props){
    super(props);
    this._renderItem = this._renderItem.bind(this)

  }
  navigate(item){
    this.props.redirectToScreen(item);
  }

  playSentence(event,text){
    console.log("event target -->",event.target.id)
    Tts.stop();
    Tts.speak(text);
  }
  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <CardFlip style={ styles.cardContainer } ref={ (card) => this['card' + index] = card } >
                
                <TouchableOpacity style={ styles.card } onPress={() => this['card' + index].flip()} >
                <Text  style={{padding:15}}>{item.fields.question}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.card } onPress={() => this['card' + index].flip()} >
                    <Text style={{padding:15}}>{item.fields.answer}</Text>
                    <Text style={styles.boldTxt}>Explanation</Text>
                    <Text style={styles.explainTag}>{item.fields.explanation}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  
                </TouchableOpacity>
            </CardFlip>

        </View>
    );
   }
  render() {
    return(
        <>
            <Carousel layout={'stack'} layoutCardOffset={9}
                ref={(c) => { this._carousel = c; }}
                data={this.props.businessPosts}
                renderItem={this._renderItem}
                sliderWidth={600}
                itemWidth={500}
            />
           
            <Text style={styles.swipeTxt}>  <Ionicons name="ios-information-circle" size={20} color={theme.colors.success} /> Swipe left and tap for details</Text>
        </>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 300,
    height: 400,
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 300,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    margin:10,
    justifyContent: 'center',
    alignItems:'center',
    flex:1
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  boldTxt:{
      fontSize:20,
      fontWeight:"bold",
      paddingTop:10
  },
  swipeTxt:{
    fontSize:20,
    fontWeight:"bold",
    padding:30,
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  explainTag:{
    padding:15,
    color:'#ffffff'
  }
});
