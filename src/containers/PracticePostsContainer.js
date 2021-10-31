import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
  } from 'react-native';
import {fetchPracticePosts} from '../actions/PracticeActions'
import {connect} from 'react-redux'
import PracticeTabDetailComponent from '../components/PracticeDetailsComponent'
import {BUSINESS_POSTS_URL} from '../constants/constants'
import{HeaderBarItem} from 'react-navigation'
import AdMob from '../components/AdMob';



class PracticePostsContainer extends Component {

    constructor(props){
      console.log("store --->",connect);
        super(props)
        this.state = {posts:[],selectedPost:{}}
        this.redirectToScreen = this.redirectToScreen.bind(this)

    }

    componentDidMount(){
        debugger

        this.props.fetchPostData(this.state.url).then((data)=>{
            console.log("Posts call completed ->",data)
        })
    }
  
    //Navigate to details page
    redirectToScreen(item){
        this.props.navigation.navigate('Details',{item});
    }
  
    render() {
        return (
        <View style={{ flex: 1 }}>
            <View style={{flex: 1}}>
                <PracticeTabDetailComponent businessPosts={this.props.posts} redirectToScreen={this.redirectToScreen}/>
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
        posts:state.practiceData.practicePosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData : (url) => dispatch(fetchPracticePosts(BUSINESS_POSTS_URL))
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    icon:{
      height: 20,
      width: 20, 
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(PracticePostsContainer)