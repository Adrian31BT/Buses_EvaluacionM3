import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useBus } from '../context/BusContext';

const BusListScreen = ({ navigation }) => {
  const { buses, deleteBus } = useBus();

  const handleDelete = (index) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro que desea eliminar este bus?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          onPress: () => deleteBus(index),
          style: 'destructive'
        },
      ]
    );
  };

  const renderBus = ({ item, index }) => (
    <View style={styles.busItem}>
      <View style={styles.busInfo}>
        <Text style={styles.placa}>Placa: {item.placa}</Text>
        <Text>Conductor: {item.conductor}</Text>
        <Text>Ruta: {item.ruta}</Text>
        <Text>Capacidad: {item.capacidad} pasajeros</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('BusForm', { bus: item, index })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleDelete(index)}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('BusForm')}
      >
        <Text style={styles.addButtonText}>Agregar Nuevo Bus</Text>
      </TouchableOpacity>

      <FlatList
        data={buses}
        renderItem={renderBus}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};