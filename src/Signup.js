import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import auth from '@react-native-firebase/auth'
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
              }
        });

const Signup=() =>{
    
    const navigation=useNavigation();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const onRegister=() =>{
      if(validate()){
        auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
          Alert.alert('Account created successfully!');
          navigation.navigate('Signin');
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      else{
        Alert.alert('please use strong password!');
      }
    });
  }else{
    Alert.alert('please enter all data');
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

return(
    <ImageBackground source={require('../images/makeup.jpg')} style={styles.container}>
  <ScrollView style={{flex:1}}>
  <View style={{flex:1,backgroundColor:Colors.white,marginBottom:130, 
  marginLeft:25, marginRight:25, marginTop:130,
    alignItems:'center',paddingBottom:50,
    paddingLeft:15,paddingRight:15}}>
    <Text style={{
      fontSize:50, color:Colors.black, alignSelf:'center', marginTop:40, fontWeight:'900'
    }}>Sign Up</Text>

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

    <TouchableOpacity style={styles.btn} onPress={onRegister} >
      <Text style={styles.btnText}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={{fontSize:22,color:Colors.black,alignSelf:'center',
      marginTop:20}}>already have account</Text>
        <Text style={styles.btnlogin} onPress={()=>{
          navigation.goBack();
        }}>Sign In</Text>
  </View>
    </ScrollView>
        
    </ImageBackground>
)

}
export default Signup;