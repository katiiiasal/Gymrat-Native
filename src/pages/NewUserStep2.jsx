import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const NewUserStep2 = ({ route, navigation }) => {
  const { userInfo } = route.params;
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (text) => {
    if (/^\d*\.?\d*$/.test(text)) {
      setHeight(text);
    }
  };

  const handleWeightChange = (text) => {
    if (/^\d*\.?\d*$/.test(text)) {
      setWeight(text);
    }
  };

  const handleNext = () => {
    const userData = {
      ...userInfo,
      height: height,
      weight: weight,
    };

    // Muestra el JSON en un alert
    Alert.alert('User Information', JSON.stringify(userData, null, 2));

    // Navega al siguiente paso, pasando userData
    navigation.navigate('BodyMeasurements', { userData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Height:</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={handleHeightChange}
        keyboardType="numeric"
        placeholder="Enter height"
      />
      <Text style={styles.label}>Weight:</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={handleWeightChange}
        keyboardType="numeric"
        placeholder="Enter weight"
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default NewUserStep2;
