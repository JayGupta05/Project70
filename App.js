import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStory';
import WriteStoryScreen from './screens/WriteStory';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const Tabnavigator = createBottomTabNavigator({
  ReadStoryScreen:ReadStoryScreen,
  WriteStoryScreen:WriteStoryScreen,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({}) => {
      const { routeName } = navigation.state;
      if(routeName==="WriteStoryScreen"){
        return(
          <Image
            source={
              require("./assets/write.png")
            }
            style={{width:40,height:40}}
          />
        )
      } else if(routeName==="ReadStoryScreen"){
        return(
          <Image
          source={
            require("./assets/read.png")
          }
          style={{width:40,height:40}}
        />
        )
      }
    },
  }),
})

const SwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  Tabnavigator,Tabnavigator,
})

const AppContainer = createAppContainer(SwitchNavigator);