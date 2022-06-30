import React, {useState} from 'react'
import {StyleSheet, Button, View} from 'react-native'


export default props =>{
        return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>    
        </View>
        
)
}

const style = StyleSheet.create({
    FlexV4:{
        flexGrow: 1,
        width: 100,
        backgroundColor:'black',
    },    
    V0:{
        backgroundColor:"blue",
        height: 300,
    },
    V1:{
        backgroundColor:"red",
        flexGrow: 9,
    },
    V2:{
        flexGrow: 1,
        backgroundColor:"green"
    }

})