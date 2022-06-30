import React, {useState} from 'react'
import {Text,TextInput ,Button, View} from 'react-native'
import Estilo from './estilo'

export default props =>{
        const [nome, setNome] = useState('teste')

        return (
        <>
        <Text>{nome}</Text>
            <View>
                <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                //value={null} não altera o TEXT
                onChangeText={nome => setNome(nome)}
                />
            </View>
        </>
)
}