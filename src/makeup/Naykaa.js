import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";



const Naykaa=()=>{
    return(
        <WebView style={{flex:1}} 
        source={{uri:'https://www.nykaa.com/'}}></WebView>
    )
}

export default Naykaa;