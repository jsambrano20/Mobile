import React, {useState} from 'react'
import {StyleSheet, Button, View} from 'react-native'

import Quadrado from './quadrado'


export default props =>{
        return (
        <View style={style.FlexV2}>
            <Quadrado/>
            <Quadrado cor='#dd22c1'/>
            <Quadrado cor='red'/>
            <Quadrado cor='blue'/>
            <Quadrado cor='orange'/>
        </View>
        
)
}

const style = StyleSheet.create({
    FlexV2:{
        flex: 1,
        width: '100%',
        alignItems:"flex-end",
        justifyContent:"space-evenly",
        backgroundColor:'black',

    }

})