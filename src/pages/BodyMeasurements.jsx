import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, ScrollView, Text } from 'react-native';

const BodyMeasurements = ({ route, navigation }) => {
  const { userData } = route.params;
  const [medidas, setMedidas] = useState({
    "1. neck": '',
    "2. chest": '',
    "3. waist": '',
    "4. glutes": '',
    "5. calves": '',
    "6. thighs": '',
    "7. triceps": '',
    "8. forearm": '',
    "9. biceps": '',
  });

  const handleInputChange = (name, value) => {
    setMedidas({ ...medidas, [name]: value });
  };

  const handleSiguiente = () => {
    const completeData = {
      ...userData,
      measurements: medidas,
    };

    Alert.alert('Complete Data', JSON.stringify(completeData, null, 2));
    // navigation.navigate('MostrarMedidas', { medidas });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://i.imgur.com/hSaeXJY.png' }} 
          style={styles.image} 
        />
        {Object.keys(medidas).map((key) => (
          <View key={key}>
            <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter ${key}`}
              value={medidas[key]}
              onChangeText={(value) => handleInputChange(key, value)}
              keyboardType="numeric"
            />
          </View>
        ))}
        <Button title="Siguiente" onPress={handleSiguiente} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default BodyMeasurements;