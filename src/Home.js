import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState} from "react";
import { StyleSheet, View,Text, TouchableOpacity, Image, Alert, FlatList, Dimensions, ScrollView} from "react-native";
import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from '@react-native-firebase/firestore';




const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000",
    blue:"#0000FF",
    lightpink:"#ffd8f0"
    };

    const styles=StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:Colors.theme
        },
        header:{
            width:'100%',
            height:70,
            flexDirection:'row',
            backgroundColor:Colors.theme,
            elevation:20
        },
        title:{
            fontSize:40,
            fontWeight:'600',
            marginTop:5,
            alignItems:'center',
            color:Colors.black
        },
        view:{
            width:'85%',
            height:570,
            borderStyle:'solid',
            borderWidth:1,
            borderColor:Colors.white,
            borderRadius:15,
            alignItems:'center',
            margin:30,
            backgroundColor:Colors.white,
            padding:10
        },
        logo:{
            width:210,
            height:80,
        },
        logo1:{
            width:210,
            height:110,
            marginTop:30
        },
        logo2:{
            width:210,
            height:110,
            marginTop:30
        },
        userIcon:{
            width:70,
            height:70,
            marginTop:10
        },
        name:{
            color:Colors.black,
            marginLeft:20,
            fontSize:35,
            fontWeight:'900'
        },
        address:{
            color:Colors.black,
            marginLeft:20,
            fontSize:25,
            fontWeight:'500'
        },
        mail:{
            color:Colors.greyish,
            marginLeft:20,
            fontSize:20,
        },
        mobile:{
            color:Colors.greyish,
            marginLeft:20,
            fontSize:20
        },
        userItem:{
            width:Dimensions.get('window').width-50,
            alignSelf:'center',
            marginTop:5,
            marginBottom:15,
            height:320,
            borderWidth:.7,
            borderRadius:10,
            padding:10,
            alignItems:'center',
            backgroundColor:Colors.white,
            borderColor:Colors.white
        },
        btn:{
            width:'50%',
            height:50,
            borderRadius:10,
            alignSelf:'center',
            alignItems:'center',
            marginTop:20,
            backgroundColor:Colors.theme
          },
          btnText:{
            color:Colors.black,
            marginTop:7,
            fontWeight:'900',
            fontSize:25
          },
          search:{
            padding:7,
            height:60,
           flexDirection:'row',
            width:'90%',
            margin:20,
            backgroundColor:Colors.white,
            borderRadius:50,
            alignItems:'center',
          }
    });   


const Home=() =>{

    const navigation=useNavigation();

    const [salon,setSalon]=useState();
   
  const onSearchItem =()=>{
    navigation.navigate('Search');
  }

    useEffect(()=>{
        getSalon();
    },[]);
const getSalon=async()=>{
    await AsyncStorage.getItem('SALONEMAIL');
    let tempData=[];
    const salonemail=await AsyncStorage.getItem("SALONEMAIL");
    firestore().collection("All_Salon").get().then( res =>{
        if(res.docs !=[]){
            res.docs.map(item => {
                tempData.push(item.data());
            });
        }
        setSalon(tempData);
    });
}


  const  onAdd=()=>{
        navigation.navigate('AddSalon');
    };

    const onSignout=()=>{
        auth()
        .signOut()
        .then(() => Alert.alert('User signed out!'));
    }
    
const onBook=()=>{
    navigation.navigate('Book');
};

const onNykaa=()=>{
    navigation.navigate('Naykaa');
};
const onPurplle=()=>{
    navigation.navigate('Purplle');
};
const onSmytten=()=>{
    navigation.navigate('Smytten');
};
const onSugar=()=>{
    navigation.navigate('Sugar');
};

const onDrawer=()=>{
    navigation.navigate('Drawer');
}

    return(
        <ScrollView style={{flex:1}}>
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={onDrawer}>
                <Image source={require('../images/drawer.png')} 
                style={{width:50,height:50,alignItems:'center',marginTop:10,marginLeft:10}}></Image>
            </TouchableOpacity>
            <View style={{alignItems:'center',width:'70%'}}>
                <Text style={styles.title}>Makeover</Text>
            </View>
        </View>

        <View style={{width:'100%',height:7,backgroundColor:Colors.white}}></View>
      <View style={styles.view}>
        <Text style={{fontSize:25,color:Colors.black,textAlign:"center",fontWeight:'900',marginBottom:50}}>are you intrested to buy makeup products ?</Text>
      <TouchableOpacity onPress={onNykaa}>
        <Image source={require('../images/nykaa.jpg')} style={styles.logo}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPurplle}>
        <Image source={require('../images/purplle.png')} style={styles.logo}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSmytten}>
        <Image source={require('../images/smytten.png')} style={styles.logo1}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSugar}>
        <Image source={require('../images/sugar.jpg')} style={styles.logo2}></Image>
      </TouchableOpacity>
      </View>

      <View style={{width:'100%',height:7,backgroundColor:Colors.white,marginBottom:30}}></View>

      <TouchableOpacity onPress={onSearchItem}>
        <View style={styles.search}>
            <Image source={require('../images/search.png')} 
            style={{width:35,height:35,marginLeft:10,marginRight:7}}></Image>
             <Text style={{fontSize:20,color:Colors.greyish}}>search...</Text>
        </View>
        </TouchableOpacity>
                   
      <FlatList data={salon} renderItem={({item,index}) =>{
            return(
                <View style={styles.userItem}>
                    <Image source={require("../images/salon.png")} style={styles.userIcon}></Image>
                    <Text style={styles.name}>{item.salonName}</Text>
                    <Text style={styles.address}>{item.salonAddress}</Text>
                    <Text style={styles.mail}>{item.salonemail}</Text>
                    <Text style={styles.mobile}>{item.salonMobile}</Text>
                    <TouchableOpacity style={styles.btn} onPress={onBook}>
                        <Text style={styles.btnText}>Book</Text>
                    </TouchableOpacity>
                </View>
            )
        }}>

      </FlatList>

    </View>
    </ScrollView>
    )
}
export default Home;