import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Login2 = ({ navigation }) => {
  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Test', { name: 'Test' });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Ir a Test</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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

export default Login2;
