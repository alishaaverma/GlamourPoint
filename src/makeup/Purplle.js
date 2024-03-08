import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";



const Purplle=()=>{
    return(
        <WebView style={{flex:1}} 
        source={{uri:'https://www.purplle.com/'}}></WebView>
    )
}

export default Purplle;