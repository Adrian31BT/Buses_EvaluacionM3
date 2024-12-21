import React, { useState, useEffect } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  StyleSheet,  Alert,} from 'react-native';
import { useBus } from '../context/BusContext';

export const BusFormScreen = ({ navigation, route }) => {
  const { addBus, updateBus } = useBus();
  const editingBus = route.params?.bus;
  const editingIndex = route.params?.index;

  const [busData, setBusData] = useState({
    numero: '',
    capacidad: '',
  });

  useEffect(() => {
    if (editingBus) {
      setBusData({
        numero: editingBus.numero,
        capacidad: editingBus.capacidad,
      });
    }
  }, [editingBus]);

  const validarFormulario = () => {
    if (!busData.numero || !busData.capacidad) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  const handleGuardar = () => {
    if (!validarFormulario()) return;

    if (editingBus) {
      updateBus(editingIndex, busData);
    } else {
      addBus(busData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número de Bus"
        value={busData.numero}
        keyboardType="numeric"
        onChangeText={(text) => setBusData({ ...busData, numero: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Capacidad"
        value={busData.capacidad}
        keyboardType="numeric"
        onChangeText={(text) => setBusData({ ...busData, capacidad: text })}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleGuardar}
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    minWidth: 120,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#757575',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});