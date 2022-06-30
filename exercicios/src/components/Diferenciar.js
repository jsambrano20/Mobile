import React, {useState} from 'react'
import {Text, Button, View, Platform} from 'react-native'
import Estilo from './estilo'

export default props =>{
    if(Platform.OS=='android'){
        return <Text style={Estilo.txtG}>Android </Text>
    }
    else if(Platform.OS=='ios'){
        return <Text style={Estilo.txtG}>IOS</Text>
    }
    else {
        return <Text style={Estilo.txtG}>MOBILE</Text>
    }
}