import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textos}></Text>
      <Text style={styles.textos}>  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textos: {
      color: '#fff'
  },
});
