import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import auth, { firebase ,sendPasswordResetEmail} from '@react-native-firebase/auth';

const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000",
    blue:"#0000FF"
    };

const styles=StyleSheet.create({
    input:{
        width:'90%',
        height:60,
        borderWidth:0.5,
        fontSize:17,
        borderRadius:50,
        alignSelf:'center',
        padding:20,
        color:Colors.black,
        borderColor:Colors.black,
        borderWidth:1.5
      },
      btn:{
        width:'90%',
        height:50,
        borderRadius:50,
        alignSelf:'center',
        alignItems:'center',
        marginTop:50,
        marginBottom:70,
        backgroundColor:Colors.theme
      },
      btnText:{
        color:Colors.black,
        marginTop:7,
        fontWeight:'500',
        fontSize:25
      }
})

const ResetPass=()=>{

    const navigation=useNavigation();

    const [email, setEmail]=useState('');

    const authh = auth();
const onResetPass=()=>{
  if(emptyemail()){
sendPasswordResetEmail(authh,email)
.then(response =>{
    Alert.alert('password reset link is send successfully');
    setEmail('');
})
.catch((error)=>{
    Alert.alert('password reset link not send!!');
})
}else{
  Alert.alert('please enter the email');
}
}

const emptyemail=() => {
  let isValid=true;
  if (email==''){
    isValid=false;
  }
  return isValid;
};

return(
    <ScrollView style={{flex:1,backgroundColor:Colors.theme}}>
        <View style={{flex:1,backgroundColor:Colors.white,marginBottom:130, 
  marginLeft:25, marginRight:25, marginTop:130,
    alignItems:'center',paddingBottom:50,
    paddingLeft:15,paddingRight:15}}>
    <Text style={{
      fontSize:30, color:Colors.black, alignSelf:'center', marginTop:40,marginBottom:100, fontWeight:'900'
    }}>Reset Your Password</Text>
        <TextInput 
        placeholder="enter your registered email"
        placeholderTextColor={Colors.black}
         cursorColor={Colors.black}
         style={[styles.input,{marginTop:7}]}
         value={email}
         onChangeText={(value)=>setEmail(value)}></TextInput>

    <TouchableOpacity style={styles.btn} onPress={onResetPass} >
      <Text style={styles.btnText}>Reset Password</Text>
    </TouchableOpacity>
         </View>
    </ScrollView>
)
}
export default ResetPass;