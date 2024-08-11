import { StyleSheet, View } from 'react-native';
import Route from './Route';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Route />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
