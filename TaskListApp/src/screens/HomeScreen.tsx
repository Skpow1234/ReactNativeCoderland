import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Bienvenido a la aplicación de tareas</Text>
    <Button title="Ir a Tasks" onPress={() => navigation.navigate('Tasks')} />
    <Button title="Ir a Listado" onPress={() => navigation.navigate('List')} />
  </View>
);

export default HomeScreen;
