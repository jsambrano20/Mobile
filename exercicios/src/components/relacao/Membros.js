import React, {useState} from 'react'
import {Text, Button, View} from 'react-native'
import Estilo from '../estilo'

export default props =>{
        return (
        <>
            <Text style={Estilo.txtG}>
                {props.nome} {props.sobrenome}
            </Text>
        </>
)
}