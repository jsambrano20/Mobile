import React, {useState} from 'react'
import {Text, Button, View} from 'react-native'
import Estilo from '../estilo'

import produtos from'./produtos'

export default props =>{
function obterlista() {
    return produtos.map(p => {
        return (
        <Text key = {p.id}>
            {p.id}) {p.nome} tem preço R${p.preco}
            </Text>
            )
    })
    
}

        return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {obterlista()}
        </>
)
}