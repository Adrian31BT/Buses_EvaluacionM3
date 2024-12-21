import { StyleSheet, View, Alert } from 'react-native';
import { Input, Button } from '@rneui/base'
import { useState } from 'react';
import { insertarBuses } from '../services/ServicesBuses'

export const FormBuses = ({navigation, route}) => {

    const [bus_cantidad, setBusCantidad] = useState(""); 
    const [errorCantidad, setErrorCantidad] = useState();

    let hasErrors = false;

    const save=()=>{
        setErrorCantidad(null);
        validate();
        if(!hasErrors){
            insertarBuses({bus_cantidad:bus_cantidad}, ()=>{Alert.alert("CONFIRMACION","Se ha ingresado el bus");});
            navigation.goBack();
            route.params.fnRefresh();
        } 
    }

    const validate=()=>{
        if(bus_cantidad == null || bus_cantidad==""){
            setErrorCantidad("Debe ingresar una cantidad");
            hasErrors = true;
        }
        let bus_cantidad = parseInt(bus_cantidad);
        
        if(bus_cantidad == null || isNaN(bus_cantidad) || bus_cantidad <= 0){
            setErrorCantidad("Debe ingresar cantidad maxima de pasajeros entre 1 o mas");
            hasErrors = true;
        }
    }

    return <View style={styles.container}>
        <View style={styles.busCantidad}>
            <Input style={styles.input}
                value={bus_cantidad}
                onChangeText={setBusCantidad}
                placeholder={'1 o más'}
                label={'Ingresar cantidad Maxima de pasajeros'}
                errorMessage={errorCantidad}
            />
        </View>
       
        <Button
            title='Guardar'
            icon={{
                name: 'save',
                type: 'antdesign',
                color: 'white',
            }}
            buttonStyle={styles.saveButton}
            onPress={save}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    busCantidad:{
        flexDirection:"row",
        justifyContent: 'center',
        width:150
    },
    saveButton:{
        backgroundColor: '#5dc038',
        borderRadius: 10,
    }
});