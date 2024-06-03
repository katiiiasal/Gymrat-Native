import React from 'react';
import { ScrollView, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.title}>GYM RAT APP</Text>
          <Image
            source={{ uri: 'https://i.imgur.com/rLM0vHr.png' }}
            style={styles.image}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('LoginScreen', { name: 'LoginScreen' });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('NewUserStep1', { name: 'NewUserStep1' });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>New User</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default Login;
