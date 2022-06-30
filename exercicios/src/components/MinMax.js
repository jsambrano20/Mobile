import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Estilo from './estilo'


export default (props) => {
    console.warn(props)
    return (
        
        <Text style={Estilo.txtG}>
            O Valor {props.max} é maior que o Valor {props.min} 
        </Text>
     )
}
    


