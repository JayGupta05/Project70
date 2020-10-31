import * as React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
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
      lastVisibleDoc:"",
    }
  }

  componentDidMount = async() => {
    this.retriveStories();
    const query = await db.collection('storyHub').limit(10).get();
    query.docs.map((doc)=>{
      this.setState({
        allTransaction:[],
        lastVisibleDoc:doc,
      })
    })
  }

  retriveStories = async() => {
    console.log("Retrieve Stories");
    const allStories = await db.collection('storyHub').get();
    allStories.docs.map((doc)=>{
      this.setState({
        allStories:[...this.state.allStories,doc.data()],
        lastVisibleDoc:doc,
      })
      console.log(this.state.search);
    })
  }

  searchStory = async(text) => {
    var entertext = text;
    this.setState({
      allStories:[],
    })
    if(entertext===this.state.search){
      const search = await db.collection('storyHub').where('title','==',text).get();
      search.docs.map((doc)=>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          lastVisibleDoc:doc,
        })
      })
    }
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
        <TouchableOpacity
          style={{
            borderWidth:1,
            height:50,
            width:100,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'grey',
            marginLeft:125,
            marginTop:10,
          }}
          onPress={()=>{
            this.searchStory(this.state.search);
          }}
        >
          <Text style={{color:'white', fontSize:20,}}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
            <View style={{borderBottomWidth:2, marginTop:10}}>
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