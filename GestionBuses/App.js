import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Inicio } from './app/screens/Inicio'
import { BusListScreen } from './app/screens/BusesList';
import { FormBuses } from './app/screens/FormBuses';

export default function App() {
  const StackPartidos = createNativeStackNavigator(); 
  return (
    <NavigationContainer >
      <StackPartidos.Navigator initialRouteName='InicioNav'>
        <StackPartidos.Screen name="InicioNav"  component={BusListScreen} options={{ title: 'Gestion Buses', headerTitleAlign: 'center'}}/>
        <StackPartidos.Screen name="FormBusesNav"  component={FormBuses} options={{ title: 'Formulario Buses', headerTitleAlign: 'center'}}/>
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
