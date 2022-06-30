import React, {useState} from 'react'
import {StyleSheet, Button, View} from 'react-native'

import Quadrado from './quadrado'


export default props =>{
        return (
        <View style={style.FlexV1}>
            <Quadrado/>
            <Quadrado cor='black'/>
            <Quadrado cor='red'/>
            <Quadrado cor='blue'/>
            <Quadrado cor='orange'/>
        </View>
        
)
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        justifyContent:"space-between",
        backgroundColor:'#dd22c1',

    }

})