import React, {useState} from 'react'
import {Text, Button, View} from 'react-native'
import Estilo from './estilo'
import If from './if'

export default props =>{
    const usuario = props.usuario || {} // insere desta forma para não dar ruim caso usuário não digitar algo {NULL}
        return (
        <>
        <If teste= {usuario && usuario.nome && usuario.email}>
            <Text style={Estilo.txtG}>Usuário Logado:</Text>
            <Text style={Estilo.txtG}>{usuario.nome} - {usuario.email}</Text>
        </If>

        </>
)
}