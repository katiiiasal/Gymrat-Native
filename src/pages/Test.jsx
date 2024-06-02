import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';

const Test = () => {
  const handlePress = () => {
    Alert.alert('Botón presionado', '¡Has presionado el botón!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, este es un componente de prueba!</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Presióname</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default Test;
