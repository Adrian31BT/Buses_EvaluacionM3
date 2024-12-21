import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Inicio } from './app/screens/Inicio'
import { FormBuses } from './app/screens/FormBuses';
import { BusListScreen } from './app/screens/BusesList';
import { RutasForm } from './app/screens/RutasForm';
import { RutaListScreen } from './app/screens/RutasList';


export default function App() {
  const StackBuses = createNativeStackNavigator(); 
  return (
    <NavigationContainer >
      <StackBuses.Navigator initialRouteName='InicioNav'>
        <StackBuses.Screen name="InicioNav"  component={Inicio} options={{ title: 'Gestion Buses', headerTitleAlign: 'center'}}/>
        <StackBuses.Screen name="FormBusesNav"  component={FormBuses} options={{ title: 'Formulario Buses', headerTitleAlign: 'center'}}/>
        <StackBuses.Screen name="ListaBusesNav"  component={BusListScreen} options={{ title: 'Lista Buses', headerTitleAlign: 'center'}}/>
        <StackBuses.Screen name="FormRutasNav"  component={RutasForm} options={{ title: 'Formulario Rutas', headerTitleAlign: 'center'}}/>
        <StackBuses.Screen name="RutaListScreen"  component={RutaListScreen} options={{ title: 'Lista Rutas', headerTitleAlign: 'center'}}/>
      </StackBuses.Navigator>
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
