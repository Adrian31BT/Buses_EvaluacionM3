import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Inicio } from './app/screens/Inicio'

export default function App() {
  const StackPartidos = createNativeStackNavigator(); 
  return (
    <NavigationContainer >
      <StackPartidos.Navigator initialRouteName='InicioNav'>
        <StackPartidos.Screen name="InicioNav"  component={Inicio} options={{ title: 'Gestion Buses', headerTitleAlign: 'center'}}/>
      </StackPartidos.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});