import React from "react";
import { StyleSheet, View } from "react-native";




import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";



export function Cesta({ }){

    return(
        <>

        <Topo />
        
        <View style={estilos.cesta}>
            <Detalhes />
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