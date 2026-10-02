import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

export default App;
