import React, {useState} from 'react'
import {Text, Button, View} from 'react-native'
import Estilo from './estilo'

export default ({num = 2 }) =>{

        return (
        <View>
            <Text style={Estilo.txtG}> O resultado é:</Text>
            {
                //pode ser feito com if e else conforme 'diferenciar 
                
                num % 2=== 0
                ?  <Text style={Estilo.txtG}> PAR</Text> 
                :  <Text style={Estilo.txtG}> IMPAR</Text>
            }
        </View>
)
}