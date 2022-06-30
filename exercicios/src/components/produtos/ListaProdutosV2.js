import React, {useState} from 'react'
import {Text, FlatList, View} from 'react-native'
import Estilo from '../estilo'

import produtos from'./produtos'

export default props =>{
        const produtoRender = ({item: p})=> {
            return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
        }

        return (
            <>
        <Text style={Estilo.txtG}> LISTA PRODUTOS:</Text>
        <FlatList
        data={produtos}
        keyExtractor={i=>i.id}
        renderItem={produtoRender}/>
        </>

    )
    
    
}
