import React, {useState} from 'react'
import {Text, Button, View} from 'react-native'
import Estilo from '../estilo'
import Membros from './Membros'

export default props =>{
        return (
        <>
            <Text>[INICIO]Membros da Família:</Text>
            {props.children}
            <Text>[FIM]Membros da Família:</Text>
        </>
)
}