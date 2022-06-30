import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'

/*import CompPadrao, {Comp1,Comp2} from './components/Multi'
import Fist from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'
import ContadorV2 from './components/Contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/parimpar'
import Familia from './components/relacao/Familia'
import Membros from './components/relacao/Membros'
import Usuario from './components/UsuarioLogado' 
import Lista from './components/produtos/ListaProdutos'
import ListaV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import FlexBoxV1 from './components/Layout/FlexboxV1'
import FlexBoxV2 from './components/Layout/FlexboxV2'
import FlexBoxV3 from './components/Layout/FlexboxV3'
import FlexBoxV4 from './components/Layout/FlexboxV4'
*/
import Mega from './components/mega/Mega'

export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7}/>
    {
        /*
        <FlexBoxV4/>
        <FlexBoxV3/>
        <FlexBoxV2/>
        <FlexBoxV1/>
        <DigiteSeuNome/>
        <ListaV2 />
        <Usuario usuario={{nome: 'Joao', email: 'Sambrano@gmail.com'}}/>
        <Usuario usuario={{nome: 'Sambras'}}/>
        <Familia>
            <Membros nome="GIH" sobrenome="Sambrano"/>
            <Membros nome="Juao" sobrenome="Sambrano"/>
        </Familia>

        <Familia>
            <Membros nome="Kaka" sobrenome="Sambrano"/>
            <Membros nome="Michel" sobrenome="Sambrano"/>
        </Familia>
        <ParImpar/>
    <Diferenciar/>
    <ContadorV2/>
    <Pai />
    <Pai />
       <Contador inicial = {0} passo={10} />
       <Contador />
         <Botao/>
        <Titulo principal="Cadastro" 
                segundario = "Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Fist />*/}
    </SafeAreaView> 
)

const style = StyleSheet.create({
    App:{
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }

})

