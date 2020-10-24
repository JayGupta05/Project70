import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class TransactionScreen extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:'',
        }
    }

    submitStory = async() => {
        var story = await db.collection('storyHub').add({
            "title" : this.state.title,
            "author" : this.state.author,
            "story" : this.state.story,
        })
    }

    render(){
        return(
            <View>
                <Header 
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#fff', fontSize: 30 },
                    }}
                />
                <TextInput
                    style={{
                        marginTop:30,
                        marginLeft:35,
                        width:300,
                        height:40,
                        borderWidth:1.5,
                        fontSize: 20
                    }}
                    placeholder="Story Name"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text,
                        })
                    }}
                />
                <TextInput
                    style={{
                        marginTop:30,
                        marginLeft:35,
                        width:300,
                        height:40,
                        borderWidth:1.5,
                        fontSize: 20
                    }}
                    placeholder="Author"
                    onChangeText={(text)=>{
                        this.setState({
                            author:text,
                        })
                    }}
                />
                <TextInput
                    style={{
                        marginTop:30,
                        marginLeft:35,
                        width:300,
                        height:300,
                        borderWidth:1.5,
                        fontSize: 20
                    }}
                    placeholder="Write Your Story"
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({
                           story:text,
                        })
                    }}
                />
                <TouchableOpacity
                    style={{
                    fontSize: 40,
                    width: 100,
                    height: 40,
                    marginLeft: 100,
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:130,
                    marginTop:20,
                    }}
                    onPress={this.submitStory}
                >
                    <Text style={{fontSize:20,color:'white',}}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}