import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/topo.png"
import logo from '../../assets/logo.png'

import Texto from "../components/text";

const width = Dimensions.get("screen").width;


export function Cesta(){

    return(
        <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cestas de verduras</Text>
            <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imageFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>

            </View>
            <Texto >Uma cesta com alimentos selecionados cuidadosamentes com alimentos para cozinha</Texto>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 786 * width,
        
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 16,
        color: "white",
        fontWeight: 'bold',
        paddingTop: 50
        
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
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
        fontFamily: "MontserratRegular",
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