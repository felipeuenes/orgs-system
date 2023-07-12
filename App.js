import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import { Cesta } from './src/telas/Cesta';



export default function App() {
  return (
    // <View>
    
    <SafeAreaView>
      <StatusBar/>

        <Cesta/>
     
    
    </SafeAreaView>
    // </View>
    
  );
}


