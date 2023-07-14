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
            
        </View>
        </>
    )
}

const estilos = StyleSheet.create({
  
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
   

})