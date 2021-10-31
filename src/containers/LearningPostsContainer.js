import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList, Dimensions
  } from 'react-native';
import {Card,CardItem, Body } from 'native-base'
import {fetchBusinessPosts} from '../actions/LearningActions'
import {connect} from 'react-redux'
import BusinessTabDetailComponent from '../components/BusinessTabDetailComponent'
import {BUSINESS_POSTS_URL} from '../constants/constants'
import{HeaderBarItem} from 'react-navigation'
import AdMob from '../components/AdMob';



class LearningPostsContainer extends Component {

    constructor(props){
        super(props)
        this.state = {posts:[],selectedPost:{}}


    }

    componentDidMount(){
        const { params } = this.props.navigation.state;
        const levelId = params ? params.levelId : '';

        this.props.fetchPostData(levelId).then((data)=>{
            console.log("Posts call completed ->",data)
        })
    }
  

    render() {
        return (
        <View style={{ flex: 1 }}>
            <View style={{flex: 1}}>

                <BusinessTabDetailComponent businessPosts={this.props.posts} redirectToScreen={this.redirectToScreen}/>
            </View>
            <View style={{height:100}}>
                <AdMob />
            </View>
        </View>
        )
    }

}


const mapStateToProps = (state) => {
    return{
        posts:state.learningData.businessPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData : (levelId) => dispatch(fetchBusinessPosts(levelId))
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      paddingHorizontal: 5,
      backgroundColor:"#E6E6E6",
    },
    listContainer:{
     alignItems:'center'
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 5,
      backgroundColor:"white",
      flexBasis: '46%',
      marginHorizontal: 5,
    },
    cardFooter: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems:"center", 
      justifyContent:"center"
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    userImage:{
      height: 120,
      width: 120,
      borderRadius:60,
      alignSelf:'center',
      borderColor:"#DCDCDC",
      borderWidth:3,
    },
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    position:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    followButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    icon:{
      height: 20,
      width: 20, 
    },

  });

export default connect(mapStateToProps,mapDispatchToProps)(LearningPostsContainer)