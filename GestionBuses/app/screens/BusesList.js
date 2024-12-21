import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export const BusListScreen = () => {
  const [buses, setBuses] = useState([]);
  
  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await fetch("http://192.168.3.201:8080/buses_interprovinciales-1.0.0/rest/buses/obtenerBuses");
      const data = await response.json();
      setBuses(data);
    } catch (error) {
      console.error('Error fetching buses:', error);
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
