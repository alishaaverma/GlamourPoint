import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";



const Sugar=()=>{
    return(
        <WebView style={{flex:1}} 
        source={{uri:'https://in.sugarcosmetics.com/'}}></WebView>
    )
}

export default Sugar;