import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View,Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";
import firestore from '@react-native-firebase/firestore';

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
            backgroundColor:Colors.black
          },
          btnText:{
            color:Colors.white,
            marginTop:7,
            fontSize:25
          },
          textE:{
            fontSize:17,
            color:Colors.greyish
          },
          
    });



const AddSalon=() =>{

    const navigation=useNavigation();

    const [salonName, setsalonName]=useState('');
    const [salonAddress, setsalonAddress]=useState('');
    const [salonemail, setsalonEmail]=useState('');
    const [salonMobile, setsalonMobile]=useState('');

    const onAddSalon=()=>{
        firestore().collection("All_Salon").doc(salonemail).set({
            salonName : salonName,
            salonAddress : salonAddress,
            salonemail : salonemail,
            salonMobile : salonMobile,
          }).then(res => {
            Alert.alert('your salon added');
            navigation.navigate('Home');
            setsalonName('');
            setsalonAddress('');
            setsalonEmail('');
            setsalonMobile('');
          }).catch(error =>{
            Alert.alert('sorry! you are not add');
          });
    }

    const validate=() => {
        let isValid=true;
        if (salonName==''){
          isValid=false;
        }
        if (salonAddress==''){
          isValid=false;
        }
        if (salonemail==''){
          isValid=false;
        }
        if (salonMobile==''){
          isValid=false;
        }
        return isValid;
      };

    return(
        <ImageBackground source={require('../images/im2.jpg')} style={styles.container}>
    
    <ScrollView style={{flex:1}}>
  <View style={{flex:1,backgroundColor:Colors.white,marginBottom:130, 
  marginLeft:25, marginRight:25, marginTop:130,
    alignItems:'center',paddingBottom:50,
    paddingLeft:15,paddingRight:15}}>
    <Text style={{
      fontSize:30, color:Colors.black, alignSelf:'center', marginTop:40, fontWeight:'900'
    }}>-Add Your Salon-</Text>

    <Text style={[styles.textE,{marginTop:50}]}>your salon name</Text>
    <TextInput
    cursorColor={Colors.black}
     style={[styles.input,{marginTop:7}]}
     value={salonName}
      clearButtonMode="always"
     onChangeText={(value)=>setsalonName(value)}></TextInput>

    <Text style={[styles.textE,{marginTop:20}]}>your salon address</Text>
    <TextInput
    cursorColor={Colors.black}
    style={[styles.input,{marginTop:7}]}
    value={salonAddress}
    clearButtonMode="always"
    onChangeText={(value)=>setsalonAddress(value)}></TextInput>

    <Text style={[styles.textE,{marginTop:20}]}>your salon email</Text>
    <TextInput
    cursorColor={Colors.black}
    style={[styles.input,{marginTop:7}]}
    value={salonemail}
    clearButtonMode="always"
    onChangeText={(value)=>setsalonEmail(value)}></TextInput>

<Text style={[styles.textE,{marginTop:20}]}>your salon mobile</Text>
    <TextInput
    cursorColor={Colors.black}
    style={[styles.input,{marginTop:7}]}
    value={salonMobile}
    keyboardType='number-pad' 
    clclearButtonMode="always"
    onChangeText={(value)=>setsalonMobile(value)}></TextInput>

    <TouchableOpacity style={styles.btn} onPress={() =>{
        if(validate()){
            onAddSalon();
          }else{
            Alert.alert('please enter all data');
          }
          }} >
      <Text style={styles.btnText}>Add Now</Text>
    </TouchableOpacity>
  </View>
    </ScrollView>
    </ImageBackground>
    )
}
export default AddSalon;