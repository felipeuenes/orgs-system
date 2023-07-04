import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textos}>Começando no React Native!</Text>
      <Text style={styles.textos}> Cuida!!!!! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textos: {
      color: '#fff'
  },
});
