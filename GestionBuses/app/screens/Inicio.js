import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@rneui/base'


export const Inicio = ({navigation}) => {

    return (
        <View style={styles.container}>
          <Text style={styles.bienvenida}>Bienvenidoss</Text>
          <Button
            title='Lista de buses'
            buttonStyle={styles.ListaBoton}
            onPress={() => {
                /* navigation.navigate("ListaPartidosNav", {usuario:usuario}); */
            }}
          />
          <Button
            title='Lista de rutas'
            buttonStyle={styles.ListaBoton}
            onPress={() => {
                /* navigation.navigate("ListaPartidosNav", {usuario:usuario}); */
            }}
          />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bienvenida: {
      fontWeight: "bold",
      fontSize: 45,
    },
    ListaBoton:{
      borderRadius: 10,
      marginTop: 10,
      paddingHorizontal: 20,
      backgroundColor:"#11a85b"
    }
  });
  