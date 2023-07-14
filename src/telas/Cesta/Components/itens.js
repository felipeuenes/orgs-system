import React from "react";

import Texto from "../../../components/text";
import { View, Image, StyleSheet } from "react-native";

export default function Itens({ titulo, lista}) {
    return <>
    <Texto style={estilos.titulo}> {titulo} </Texto>

    { lista.map(({nome, image}) => {
      return <View key={nome} style={estilos.item}>
        <Image source={image} style={estilos.imagem}/>
          <Texto style={estilos.nome}> {nome} </Texto>

      </View> 
    }) }
    </>
}


const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        alignItems: "center"

    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})