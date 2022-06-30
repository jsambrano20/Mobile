import React, {useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default props =>{

        return (
        <View style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </View >
)
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: 'black',
        padding: 20,
        width: 300,
    },
    DisplayText:{
        color: 'white'
    }
})