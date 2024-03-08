import React, { useEffect } from 'react';
import { Image, StyleSheet,Text, View, ImageBackground } from 'react-native';



const Colors={
    theme:"#fdb4ba",
    white:"#fff",
    greyish:"#8E8A8A",
    black:"#000000"
    };

    const styles=StyleSheet.create({
      container:{
        flex:1,
      },
      tab:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:Colors.black,
        opacity:.6
      },
      text:{
        fontSize:70,
        fontWeight:'800',
        color:Colors.white,
      },
      view:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:22,
      }
    });

    export default function Splash({navigation}){

        useEffect(()=>{
          setTimeout(()=>{
            checkSignin();
          },2800);
        },[]);

        const checkSignin=() =>{
              navigation.navigate('Signin');
          }

        return(
            <ImageBackground source={require('../images/i1.jpg')} style={styles.container}>
                <View style={styles.tab}>
                    <View style={styles.view}>
                    <Text style={styles.text}>Glamour</Text>
                    <Text style={styles.text}>Point</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }