import * as React from "react";
import {View,Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import {FlatList} from 'react-native-gesture-handler';

export default class Search extends React.Component{
  constructor(){
    super();
    this.state={
      search:"",
      allStories:[],
    }
  }

  componentDidMount(){
    this.retriveStories();
  }

  retriveStories = async() => {
    console.log("Retrieve Stories")
    const allStories = await db.collection('storyHub').get();
    allStories.docs.map((doc)=>{
      this.setState({
        allStories:[...this.state.allStories,doc.data()],
      })
      console.log(this.state.allStories)
    })
  }

  searchStory = async() => {
    
  }

  render(){
    return(
      <View>
        <SearchBar
          placeholder='Search...'
          onChangeText={(text)=>{
            this.setState({search:text});
          }}
          value={this.state.search}
        />
        <FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
            <View>
                <Text>{'Author:' + item.author}</Text> 
                <Text>{'Title:' + item.title}</Text> 
                <Text>{'Story:' + item.story}</Text> 
            </View>
        )}
          keyExtractor={(item,index)=>index.toString()}
          onEndReached={this.retriveStories}
          onEndReachedThreshold={0.7}
        />
      </View>
    )
  }
}