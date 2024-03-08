import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';




const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000",
    blue:"#0000FF",
    lightpink:"#ffd8f0"
    };

    const styles=StyleSheet.create({
        search:{
            padding:7,
           flexDirection:'row',
            width:'90%',
            height:63,
            margin:20,
            backgroundColor:Colors.white,
            borderRadius:50,
            alignItems:'center',
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
        userIcon:{
            width:70,
            height:70,
            marginTop:10
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
          }
    })

const Search=()=>{

    const [allSalon,setAllSalon]=useState([]);
    const [searchitem, setsearchhItem]=useState([]);

    const onSearch = txt => {
        firestore()
        .collection('All_Salon')
        .where('salonAddress','==',txt)
        .get()
        .then(snapshot => {
         console.log(snapshot.docs);
         let temp = [];
         snapshot.docs.forEach(items =>{
            temp.push({...items.data()});
         })
         setsearchhItem(temp);
        })
     }

     const onClear=()=>{
        setsearchhItem('');
        onSearch("");
    }

    return(
        <View style={{flex:1, backgroundColor:Colors.theme}}>
             <View style={styles.search}>
            <Image source={require('../images/search.png')} 
            style={{width:35,height:35,marginLeft:10,marginRight:5}}></Image>
             <TextInput placeholder="search..." 
             placeholderTextColor={Colors.greyish}
             cursorColor={Colors.black}
             style={{width:'70%',fontSize:20,color:Colors.black}}
             value={searchitem}
             onChangeText={(txt)=>{
                setsearchhItem(txt);
                onSearch(txt);
                    }}></TextInput>
                    {searchitem != "" && (
                    <TouchableOpacity onPress={onClear}>
            <Image source={require('../images/close.png')} 
            style={{width:35,height:35,marginLeft:10,marginRight:5}}></Image>
            </TouchableOpacity>
            )}
        </View>

    <FlatList data={allSalon} renderItem={({items,index}) =>{
            return(
                <View style={styles.userItem}>
                    <Image source={require("../images/salon.png")} style={styles.userIcon}></Image>
                    <Text style={styles.name}>{items.salonName}</Text>
                    <Text style={styles.address}>{items.salonAddress}</Text>
                    <Text style={styles.mail}>{items.salonemail}</Text>
                    <Text style={styles.mobile}>{items.salonMobile}</Text>
                    <TouchableOpacity style={styles.btn} onPress={onBook}>
                        <Text style={styles.btnText}>Book</Text>
                    </TouchableOpacity>
                </View>
            )
        }}></FlatList>

        </View>
    )
}
export default Search;