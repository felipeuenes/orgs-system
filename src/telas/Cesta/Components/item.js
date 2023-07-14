import React from "react";

import Texto from "../../../components/text";
import { View, Image, StyleSheet, FlatList } from "react-native";

export default function Itens({ item: {nome, image} }) {

    return <View style={estilos.item}>
    <Image source={image} style={estilos.imagem}/>
      <Texto style={estilos.nome}> {nome} </Texto>

  </View> 

}

const estilos = StyleSheet.create({
    
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        alignItems: "center",
        paddingVertical: 18,
        marginHorizontal: 16,
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