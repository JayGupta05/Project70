import * as React from "react";
import {KeyboardAvoidingView,Text, TextInput,TouchableOpacity, StyleSheet,View,Image, Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
    }

    login = async(email,password) => {
        if(email&&password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('ReadStory')
                }
            }
            catch(error){
                switch(error.code){
                    case "auth/user-not-found": Alert.alert("User doesn't exist");
                    break;
                    case "auth/invalid-email": Alert.alert("Incorrect Email or Password");
                    break;
                }
            }
        } else{
            Alert.alert("Enter Email and Password");
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:"center",marginTop:20,backgroundColor:"#3B628A"}} behavior='padding' enabled>
                <View>
                <Text style={{textAlign:"center", fontSize:50, color:"white", marginTop:50,}}>Bedtime Stories</Text>
                </View>
                <View>
                    <TextInput
                        style={{
                            width: 200,
                            height: 40,
                            borderWidth: 1.5,
                            fontSize: 20,
                            marginTop:200,
                            borderRadius:5,
                            color:'white',
                            borderColor:'white',
                        }}
                        placeholder='Email'
                        onChangeText={(text)=>{
                            this.setState({
                                email:text
                            })
                        }}
                    />
                    <TextInput
                        style={{
                            width: 200,
                            height: 40,
                            borderWidth: 1.5,
                            fontSize: 20,
                            marginTop:20,
                            borderRadius:5,
                            color:'white',
                            borderColor:'white',
                        }}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{ 
                        width:250,
                        height:40,
                        borderWidth:1.5,
                        marginTop:80,
                        paddingTop:5,
                        borderRadius:20,
                        borderColor:'white',
                        marginBottom:200
                        }}
                        onPress={()=>{
                            this.login(this.state.email,this.state.password)
                        }}>
                        <Text style={{textAlign:"center",fontSize:25 ,color:'white'}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}