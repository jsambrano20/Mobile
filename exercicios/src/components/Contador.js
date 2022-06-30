

export default ({inicial = 0, passo = 1}) =>{
    //let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const inc = () =>setNumero(numero + passo)

    const det = () =>setNumero(numero - passo)


    return(
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={det}/>
        </>
    )
}