import { View, StyleSheet, Alert } from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import { useState } from 'react'
import { createRuta } from '../services/ServicesRutas'

export const RutasForm = () => {

    const [codigoRuta, setCodigoRuta]=useState();
    const [ciudadOrigen, setCiudadOrigen]=useState();
    const [ciudadDestino, setCiudadDestino]=useState();
    const [horaLlegada, setHoraLlegada]=useState();
    const [horaSalida, setHoraSalida]=useState();
    const [codigoBus, setCodigoBus]=useState();

    const createR=()=>{
        createRuta(
            {
                codRuta: codigoRuta,
                cOrigen: ciudadOrigen,
                cDestino: ciudadDestino,
                hSalida: horaSalida,
                hLlegada: horaLlegada,
                codBus: codigoBus,
            },
            ()=>{
                Alert.alert("CONFIRMACION","Se ha ingresado una nueva Ruta");
            }
        );
    }

    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">NUEVA RUTA</Text>
        </View>
        <View style={styles.formContainer}>
        <Input
                value={codigoRuta}
                label='Codigo Ruta'
                onChangeText={(value)=>{
                    setCodigoRuta(value);
                }}
            />
            <Input
                value={ciudadOrigen}
                label='Ciudad Origen'
                onChangeText={(value)=>{
                    setCiudadOrigen(value);
                }}
            />
            <Input
                value={ciudadDestino}
                label="Ciudad Destino"
                onChangeText={(value)=>{
                    setCiudadDestino(value);
                }}
            />
            <Input
                value={horaSalida}
                label="Hora salida"
                onChangeText={(value)=>{
                    setHoraSalida(value);
                }}
            />
            <Input
                value={horaLlegada}
                label="Hora llegada"
                onChangeText={(value)=>{
                    setHoraLlegada(value);
                }}
            />
            <Input
                value={codigoBus}
                label="Codigo Bus"
                onChangeText={(value)=>{
                    setCodigoBus(value);
                }}
            />
            <Button 
                title="Guardar"
                onPress={
                    createR
                }
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    formContainer: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center'

    }
});
