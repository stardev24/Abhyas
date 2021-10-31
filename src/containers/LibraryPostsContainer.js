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
import {fetchLibraryPosts} from '../actions/LibraryActions'
import {connect} from 'react-redux'
import LibraryTabDetailComponent from '../components/LibraryTabDetailComponent'
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
                <LibraryTabDetailComponent businessPosts={this.props.posts} />
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
        posts:state.libraryData.libraryPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostData : (url) => dispatch(fetchLibraryPosts())
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
  });

export default connect(mapStateToProps,mapDispatchToProps)(RefresherPostsContainer)