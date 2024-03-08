import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";



const Book=()=>{
    return(
        <WebView style={{flex:1}} 
        source={{uri:' https://alishaaverma.github.io/appointment_booking_form/'}}></WebView>
    )
}

export default Book;