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
import {fetchLevels} from '../actions/BusinessNewsActions'
import {connect} from 'react-redux'
import BusinessTabDetailComponent from '../components/BusinessTabDetailComponent'
import {BUSINESS_POSTS_URL} from '../constants/constants'
import{HeaderBarItem} from 'react-navigation'
import AdMob from '../components/AdMob';


const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

class BusinessPostsContainer extends Component {

    constructor(props){
      console.log("store --->",connect);
        super(props)
        this.state = {posts:[],selectedPost:{}}
        this.redirectDetails = this.redirectDetails.bind(this)

    }

    componentDidMount(){
        debugger

        this.props.fetchLevels().then((data)=>{
            console.log("Posts call completed ->",data)
        })
    }
  
    //Navigate to details page
    redirectDetails(item){
        this.props.navigation.navigate('Details',{levelId:item.fields.levelid});
    }


    render() {
        return (
        <View style={{ flex: 1 }}>
            <View style={{flex: 1}}>
            <ScrollView>
              <FlatList
                data={formatData(this.props.levels,numColumns)}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={numColumns}
                keyExtractor={(item,index) => `lc-${index}`}
                renderItem = {({ item, index }) => {
                  if (item.empty === true) {
                    return (<View style={[styles.item, styles.itemInvisible]} />);
                  }
                  return (
                    <View
                      style={styles.item} 
                    >
                      <Text style={styles.itemText} onPress={()=> this.redirectDetails(item)}>{item.fields.label}</Text>
                    </View>
                  );
                }}
              />              
            </ScrollView>
               {/* <BusinessTabDetailComponent businessPosts={this.props.posts} redirectToScreen={this.redirectToScreen}/> */}
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
        levels:state.levelsData.levels
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLevels : () => dispatch(fetchLevels())
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
    item: {
      borderWidth:1,
      backgroundColor:'#f0f5f4',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      height: Dimensions.get('window').width / numColumns,
      marginLeft:9,
      marginRight:9,
      marginTop:7
    },
    itemInvisible: {
      backgroundColor: 'transparent',
      borderWidth:0
    },
    itemText: {
      fontWeight:'bold',
      fontSize:20,
      color:"#008080",
      textDecorationLine:"underline"
    },
  });

export default connect(mapStateToProps,mapDispatchToProps)(BusinessPostsContainer)