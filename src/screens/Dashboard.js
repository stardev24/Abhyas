import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import {createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import BusinessDetailsScreen from '../components/tabs/BusinessDetailsPage';
import UserProfile from '../components/UserProfileDetailsComponent';
import BusinessPostsContainer from '../containers/BusinessPostsContainer';
import RefresherPostsContainer from '../containers/RefresherPostContainer'
import PracticePostsContainer from '../containers/PracticePostsContainer'
import LearningPostsContainer from '../containers/LearningPostsContainer'
import LibraryPostsContainer from '../containers/LibraryPostsContainer'
import { createAppContainer } from 'react-navigation';
import { theme } from "../core/theme";


//CFPAT-kOTBv9IphVGEIuW8PHE64Wr72KV43hwG8Tp4Hey3USI

const TabScreen = createBottomTabNavigator(
  {
    Learning: {
        screen:BusinessPostsContainer,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="book" size={30} color={tintColor} />
          )
      },
    },
    Practice:{
        screen:PracticePostsContainer,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="flask" size={30} color={tintColor} light/>
          )
      },
    },
    Refresher:{
      screen:RefresherPostsContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="cubes" size={30} color={tintColor} />
        )
      },
    },
    Library:{
      screen:LibraryPostsContainer,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="bullseye" size={30} color={tintColor} />
          )
      },
    },
    Profile:{
      screen:UserProfile,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="user" size={30} color={tintColor} />
          )
      },
    }
  },
  {
      defaultNavigationOptions: ({ navigation }) => ({

      }),
      tabBarOptions: {
        activeTintColor: theme.colors.primary,

        showIcon:true
      },
    }
);



const AppNavigatorContainer = createStackNavigator({
  TabScreen: TabScreen,
  Details:LearningPostsContainer
},{
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: theme.colors.primary
    },
    headerTitleStyle: { color: 'white' },
    title:'Abhyas'
  }
}); 
const Dashboard = createAppContainer(AppNavigatorContainer);

/*const Dashboard = () => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button>
   
  </Background>
);
*/
export default Dashboard;
