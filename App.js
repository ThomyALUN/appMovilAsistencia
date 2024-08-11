import { StyleSheet, View } from 'react-native';
import Route from './Route';

export default function App() {
  return (
    <View style={styles.container}>
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
