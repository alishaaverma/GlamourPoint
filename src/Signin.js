import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import auth, { firebase ,sendPasswordResetEmail} from '@react-native-firebase/auth';
import Loader from "./component/Loader";
import { StyleSheet, View,Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";


const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000",
    blue:"#0000FF"
    };

    const styles=StyleSheet.create({
        container:{
          flex:1,
        },
        input:{
                width:'90%',
                height:50,
                borderWidth:0.5,
                borderRadius:10,
                alignSelf:'center',
                paddingLeft:20,
                color:Colors.black
              },
              btn:{
                width:'90%',
                height:50,
                borderRadius:10,
                alignSelf:'center',
                alignItems:'center',
                marginTop:60,
                backgroundColor:Colors.theme
              },
              btnText:{
                color:Colors.black,
                marginTop:7,
                fontWeight:'500',
                fontSize:25
              },
              textE:{
                fontSize:17,
                color:Colors.greyish
              },
              btnlogin:{
                alignSelf:'center',
                marginTop:5,
                fontSize:25,
                fontWeight:'600',
                color:Colors.blue,
                textDecorationLine:'underline'
              },
              btnForgot:{
                alignSelf:'center',
                marginTop:15,
                fontSize:20,
                fontWeight:'600',
                color:Colors.blue,
                textDecorationLine:'underline'
              }
        });

const Signin=() =>{

    const navigation=useNavigation();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [visible,setVisible]=useState(false);

    
    const onLogin=() =>{
      if(validate()){
      setVisible(true);
      auth().signInWithEmailAndPassword(email,password)
      .then(response =>{
        setVisible(false);
        Alert.alert('login successfully!');
        navigation.navigate('Home');
        setEmail('');
        setPassword('');
      })
      .catch(error =>{
        setVisible(false);
        Alert.alert('error! please enter correct data!');
      }) 
    }else{
      Alert.alert('please enter all data');
    }
    }
  

    firebase.auth().onAuthStateChanged(user =>{
      if(!user){
        navigation.navigate('Signin');
      }else{
        navigation.navigate('Home');
      }
    })

const authh = auth();
const onForgot=()=>{
  if(emptyemail()){
sendPasswordResetEmail(authh,email)
.then(response =>{
    Alert.alert('password reset link is send successfully');
})
.catch((error)=>{
    Alert.alert('password reset link not send!!');
})
}else{
  Alert.alert('please enter the email');
}
}

const validate=() => {
  let isValid=true;
  if (email==''){
    isValid=false;
  }
  if (password==''){
    isValid=false;
  }
  return isValid;
};
const emptyemail=() => {
  let isValid=true;
  if (email==''){
    isValid=false;
  }
  return isValid;
};

    return(
        <ImageBackground source={require('../images/makeup.jpg')} style={styles.container}>
            <ScrollView style={{flex:1}}>
  <View style={{flex:1,backgroundColor:Colors.white,marginBottom:130, 
  marginLeft:25, marginRight:25, marginTop:130,
    alignItems:'center',paddingBottom:50,
    paddingLeft:15,paddingRight:15}}>
    <Text style={{
      fontSize:50, color:Colors.black, alignSelf:'center', marginTop:40, fontWeight:'900'
    }}>Sign In</Text>

    <Text style={[styles.textE,{marginTop:50}]}>enter email</Text>
    <TextInput
    cursorColor={Colors.black}
     style={[styles.input,{marginTop:7}]}
     value={email}
     clearButtonMode="always"
     onChangeText={(value)=>setEmail(value)}></TextInput>

    <Text style={[styles.textE,{marginTop:20}]}>enter password</Text>
    <TextInput
    cursorColor={Colors.black}
    style={[styles.input,{marginTop:7}]}
    value={password}
    secureTextEntry={true}
    onChangeText={(value)=>setPassword(value)}></TextInput>

    <TouchableOpacity style={styles.btn} onPress={onLogin} >
      <Text style={styles.btnText}>Sign In</Text>
    </TouchableOpacity>
        <Text style={styles.btnForgot} onPress={onForgot}>are you forgot your password?</Text>
    <Text style={{fontSize:22,color:Colors.black,alignSelf:'center',
      marginTop:40}}>you are new user</Text>
        <Text style={styles.btnlogin} onPress={()=>{
          navigation.navigate('Signup');
        }}>Sign Up</Text>
        <Loader visible={visible}/>
  </View>
    </ScrollView>
            
        </ImageBackground>
    )
}
export default Signin;