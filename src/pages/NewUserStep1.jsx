import React, { useState } from 'react';
import { View, TextInput, Image, Button, StyleSheet, Text, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const NewUserStep1 = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male'); // Default gender set to 'male'
  const [age, setAge] = useState('');

  const handleNext = () => {
    if (!username) {
      Alert.alert('Invalid Username', 'Username is required.');
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      Alert.alert('Invalid Username', 'Username can only contain letters and numbers.');
      return;
    }
    if (username.length > 20) {
      Alert.alert('Invalid Username', 'Username cannot exceed 20 characters.');
      return;
    }
    if (password.length > 20) {
      Alert.alert('Invalid password', 'Password cannot exceed 20 characters.');
      return;
    }
    if (!password) {
      Alert.alert('Invalid Password', 'Password is required.');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Invalid Password', 'Password must be at least 8 characters long.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Alert.alert('Invalid Password', 'Password must contain at least one uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      Alert.alert('Invalid Password', 'Password must contain at least one lowercase letter.');
      return;
    }
    if (!/[0-9]/.test(password)) {
      Alert.alert('Invalid Password', 'Password must contain at least one number.');
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Alert.alert('Invalid Password', 'Password must contain at least one special character.');
      return;
    }
    if (!gender) {
      Alert.alert('Invalid Gender', 'Gender is required.');
      return;
    }
    const ageNumber = parseInt(age, 10);
    if (!age || isNaN(ageNumber) || ageNumber < 18 || ageNumber > 99 || !/^\d+$/.test(age)) {
      Alert.alert('Invalid Age', 'Age must be an integer between 18 and 99.');
      return;
    }

    
    const userInfo = {
      username: username,
      password: password,
      gender : gender,
      age: ageNumber,
    };

    //console.log(userInfo);
    Alert.alert('User Information', JSON.stringify(userInfo, null, 2)); 

    navigation.navigate('NewUserStep2', { userInfo: userInfo });

  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/rLM0vHr.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>User Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => {
          if (/^\d*$/.test(text)) { // Only allow integers
            setAge(text);
          }
        }}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  pickerContainer: {
    width: '80%',
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    borderColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderRadius: 5,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: Platform.OS === 'ios' ? 200 : 40,
  },
});

export default NewUserStep1;
