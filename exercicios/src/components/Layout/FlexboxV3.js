import React, {useState} from 'react'
import {StyleSheet, Button, View} from 'react-native'

import Quadrado from './quadrado'


export default props =>{
        return (
        <View style={style.FlexV3}>
            <Quadrado lado={20}/>
            <Quadrado cor='#dd22c1' lado={30}/>
            <Quadrado cor='red' lado={40}/>
            <Quadrado cor='blue' lado={50}/>
            <Quadrado cor='orange' lado={60}/>
        </View>
        
)
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: "row",// "row-reverse"or "row" or "column-reverse" flexDirection quem define o eixo 
        justifyContent:"space-around" ,
        alignItems:"flex-start",
        height:350 ,
        width: '100%',
        backgroundColor:'black',

    }

})