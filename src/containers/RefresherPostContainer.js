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
import {fetchRefresherPosts} from '../actions/RefresherActions'
import {connect} from 'react-redux'
import RefresherTabDetailComponent from '../components/RefresherTabDetailComponent'
import {BUSINESS_POSTS_URL} from '../constants/constants'
import{HeaderBarItem} from 'react-navigation'
import AdMob from '../components/AdMob';



class RefresherPostsContainer extends Component {

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
                <RefresherTabDetailComponent businessPosts={this.props.posts} redirectToScreen={this.redirectToScreen}/>
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
        posts:state.refresherData.refresherPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData : (url) => dispatch(fetchRefresherPosts(BUSINESS_POSTS_URL))
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
  });

export default connect(mapStateToProps,mapDispatchToProps)(RefresherPostsContainer)