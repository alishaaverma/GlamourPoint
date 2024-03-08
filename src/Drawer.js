import { useNavigation } from "@react-navigation/native";
import React, {useState } from "react";
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import auth from '@react-native-firebase/auth'


const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000",
    blue:"#0000FF"
    };

const styles=StyleSheet.create({
view:{
    backgroundColor:Colors.white,
    flexDirection:'row',
    width:'85%',
    height:70,
    alignItems:'center',
    padding:10,
    marginLeft:30,
    marginRight:30,
    marginTop:'30%',
    borderRadius:50
},
text:{
    fontSize:25,
    marginLeft:20,
    fontWeight:'800',
    color:Colors.black
}

})

const Drawer=()=>{

    const navigation=useNavigation();

    const  onAddSalon=()=>{
        navigation.navigate('AddSalon');
    };

    const onSignout=()=>{
        auth()
        .signOut()
        .then(() => Alert.alert('User signed out!'));
    }

const onRp =()=>{
    navigation.navigate('ResetPass');
}

const onAbout=()=>{
navigation.navigate('Aboutus');
}

return(
    <ScrollView style={{flex:1,backgroundColor:Colors.theme}}>
        <TouchableOpacity onPress={onAddSalon}>
    <View style={styles.view}>
    <Image source={require('../images/add.png')}
    style={{width:45,height:45,marginLeft:15}}></Image>
    <Text style={styles.text}>Add Your Salon</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={onRp}>
    <View style={[styles.view,{marginTop:30}]}>
    <Image source={require('../images/rp.png')}
    style={{width:45,height:45,marginLeft:15}}></Image>
    <Text style={styles.text}>Reset Password</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={onAbout}>
    <View style={[styles.view,{marginTop:30}]}>
    <Image source={require('../images/aboutus.png')}
    style={{width:45,height:45,marginLeft:15}}></Image>
    <Text style={styles.text}>About Us</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={onSignout}>
    <View style={[styles.view,{marginTop:30}]}>
    <Image source={require('../images/logout.png')}
    style={{width:45,height:45,marginLeft:15}}></Image>
    <Text style={styles.text}>Logout</Text>
    </View>
    </TouchableOpacity>
    </ScrollView>
)
}
export default Drawer;