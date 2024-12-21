import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { FormBuses} from '../FormBuses';

export const BusListScreen = () => {
  const { buses, addBus, updateBus } = useBus();

  const [txtNumero, setTxtNumero] = useState('');
  const [txtCapacidad, setTxtCapacidad] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSaveBus = () => {
    if (isEditing && selectedIndex >= 0) {
      updateBus(selectedIndex, { numero: txtNumero, capacidad: txtCapacidad });
    } else {
      addBus({ numero: txtNumero, capacidad: txtCapacidad });
    }
    clearForm();
  };

  const clearForm = () => {
    setTxtNumero('');
    setTxtCapacidad('');
    setIsEditing(false);
    setSelectedIndex(-1);
  };

  const handleEditBus = (index, bus) => {
    setTxtNumero(bus.numero);
    setTxtCapacidad(bus.capacidad);
    setIsEditing(true);
    setSelectedIndex(index);
  };

  const handleDeleteBus = (index) => {
    buses.splice(index, 1);
    clearForm();
  };

  const renderBusItem = ({ item, index }) => (
    <View style={styles.busItem}>
      <View style={styles.busDetails}>
        <Text style={styles.textMain}>Número: {item.numero}</Text>
        <Text style={styles.textSecondary}>Capacidad: {item.capacidad}</Text>
      </View>
      <View style={styles.busActions}>
        <Button title="Editar" color="green" onPress={() => handleEditBus(index, item)} />
        <Button title="Eliminar" color="red" onPress={() => handleDeleteBus(index)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.title}>Gestión de Buses</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de Bus"
          value={txtNumero}
          onChangeText={setTxtNumero}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Capacidad"
          value={txtCapacidad}
          onChangeText={setTxtCapacidad}
          keyboardType="numeric"
        />
        <View style={styles.actionButtons}>
          <Button title={isEditing ? "Actualizar" : "Guardar"} onPress={handleSaveBus} />
          <Button title="Nuevo" onPress={clearForm} />
        </View>
      </View>
      <View style={styles.listArea}>
        <FlatList
          data={buses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderBusItem}
        />
      </View>
      <View style={styles.footerArea}>
        <Text>Total de Buses: {buses.length}</Text>
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
  headerArea: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  listArea: {
    flex: 1,
  },
  busItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  busDetails: {
    flex: 3,
  },
  busActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

