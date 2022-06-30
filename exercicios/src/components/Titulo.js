import React, {Fragment} from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

 /*Em Fragmente pode user 3 formas a do cod e as seguintes
 React.Fragmente OR Usar apenas <> </> */
export default props => (
    <Fragment>
    <Text style={Estilo.txtG}>{props.principal}</Text>
    <Text>{props.segundario}</Text>
    </Fragment>
)
