import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStory';
import WriteStoryScreen from './screens/WriteStory';

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

const AppContainer = createAppContainer(Tabnavigator);