import React from "react";
import { ScrollView ,StyleSheet, View } from "react-native";




import Topo from "./Components/Topo";
import Detalhes from "./Components/Detalhes";
import Itens from "./Components/itens";



export function Cesta({ topo, detalhes, itens }){

    return(
       <ScrollView>


        <Topo {...topo}/>
        
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens}/>
        </View>
        
        </ScrollView>
        
    )
}

const estilos = StyleSheet.create({
  
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
   

})