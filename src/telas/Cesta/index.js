import React from "react";
import { Image, StyleSheet, View } from "react-native";

import logo from '../../../assets/logo.png'


import Texto from "../../components/text";
import Topo from "./Components/Topo";



export function Cesta({ }){

    return(
        <>

        <Topo />
        
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cestas de verduras</Texto>
            <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imageFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>

            </View>
            <Texto style={estilos.descricao}>Uma cesta com alimentos selecionados cuidadosamentes com alimentos para cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
        </>
    )
}

const estilos = StyleSheet.create({
  
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    imageFazenda: {
        width: 32,
        height: 32,
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12,
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8

    }

})