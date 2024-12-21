export const insertarRutas = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            rut_codigo: post.rut_codigo,
            rut_ciudadOrigen: post.rut_ciudadOrigen,
            rut_ciudadDestino: post.rut_ciudadDestino,
            rut_horaSalida: post.rut_horaSalida,
            rut_horaLlegada: post.rut_horaLlegada,
            bus_codigo: post.bus_codigo,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }
    fetch("http://192.168.3.201:8080/buses_interprovinciales-1.0.0/rest/rutas/insertarRutas", config)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
    fnExito();
};

// listaRutas.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export const RutaListScreen = () => {
    const [rutas, setRutas] = useState([]);

    useEffect(() => {
        fetchRutas();
    }, []);

    const fetchRutas = async () => {
        try {
            const response = await fetch("http://192.168.3.201:8080/buses_interprovinciales-1.0.0/rest/rutas/obtenerRutas");
            const data = await response.json();
            setRutas(data);
        } catch (error) {
            console.error('Error fetching rutas:', error);
        }
    };

    const renderRutaItem = ({ item }) => (
        <View style={styles.rutaItem}>
            <View style={styles.rutaDetails}>
                <Text style={styles.textMain}>Código: {item.rut_codigo}</Text>
                <Text style={styles.textSecondary}>Origen: {item.rut_ciudadOrigen}</Text>
                <Text style={styles.textSecondary}>Destino: {item.rut_ciudadDestino}</Text>
                <Text style={styles.textSecondary}>Hora de Salida: {item.rut_horaSalida}</Text>
                <Text style={styles.textSecondary}>Hora de Llegada: {item.rut_horaLlegada}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.listArea}>
                <FlatList
                    data={rutas}
                    keyExtractor={(item) => item.rut_codigo.toString()}
                    renderItem={renderRutaItem}
                />
            </View>
            <View style={styles.footerArea}>
                <Text>Total de Rutas: {rutas.length}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    listArea: {
        flex: 1,
    },
    rutaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    rutaDetails: {
        flex: 1,
    },
    textMain: {
        fontSize: 18,
    },
    textSecondary: {
        fontSize: 14,
        color: 'gray',
    },
    footerArea: {
        padding: 10,
        alignItems: 'center',
    },
});

export default RutaListScreen;