import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

export const BusListScreen = () => {
  const { buses, addBus, updateBus } = useState();
  
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
  };

  const renderBusItem = ({ item }) => (
    <View style={styles.busItem}>
      <View style={styles.busDetails}>
        <Text style={styles.textMain}>Número: {item.numero}</Text>
        <Text style={styles.textSecondary}>Capacidad: {item.capacidad}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listArea}>
        <FlatList
          data={buses}
          keyExtractor={(item) => item.id.toString()}
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
  listArea: {
    flex: 1,
  },
  busItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  busDetails: {
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

export default BusListScreen;
