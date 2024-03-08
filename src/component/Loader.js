import React from "react";
import { View,Text, Modal, StyleSheet, Dimensions, ActivityIndicator } from "react-native";



const styles=StyleSheet.create({
    modalView:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor:'rgba(0,0,0,.6)',
        justifyContent:'center',
        alignItems:'center'
    },
    mainView:{
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#fff'
    }
})

const Loader=({visible}) => {
    return(
        <Modal visible={visible} transparent>
            <View style={styles.modalView}>
                <View style={styles.mainView}>
                    <ActivityIndicator size={'large'}/>
                </View>
            </View>
        </Modal>
    );
}
export default Loader;