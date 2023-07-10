import { StatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView ,Text } from 'react-native';
import { Cesta } from './src/telas/cesta';



export default function App() {
  return (
    <SafeAreaView>

      <StatusBar />
      <Text >algo</Text>
      <Text>algo  </Text>

      <Cesta/>
     
    
    </SafeAreaView>
  );
}


