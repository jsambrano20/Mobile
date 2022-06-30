import React, {useState} from 'react'
import {StyleSheet, Button, View} from 'react-native'

export default props =>{
        const lado = props.lado || 50
    return (
            <View style={{
                height: lado,
                width: lado, //"stretch" caso nao tiver valor fixo
                backgroundColor: props.cor || 'green'
            
            }}/>
        
)
}
