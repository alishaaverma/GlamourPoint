import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";



const Smytten=()=>{
    return(
        <WebView style={{flex:1}} 
        source={{uri:'https://smytten.com/'}}></WebView>
    )
}

export default Smytten;