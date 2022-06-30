import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'


export default function() /*Pode ser sem nome -- Ele exporta por default e não é necessário exportar no app padrão especificando ele*/
{
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>
    
}

 function Comp1() 
{
    return <Text style={Estilo.txtG}>Comp #01</Text>
    
}

 function Comp2() 
{
    return <Text style={Estilo.txtG}>Comp #02</Text>
    
}

export {Comp1, Comp2}


