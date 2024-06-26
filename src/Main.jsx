import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Test from './pages/Test';
import LoginScreen from './pages/LoginScreen';
import NewUserStep1 from './pages/NewUserStep1';
import NewUserStep2 from './pages/NewUserStep2';
import BodyMeasurements from './pages/BodyMeasurements';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="Test"
                component={Test}
                options={{ title: 'Test' }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="NewUserStep1"
                component={NewUserStep1}
                options={{ title: 'Step 1' }}
            />
            <Stack.Screen
                name="NewUserStep2"
                component={NewUserStep2}
                options={{ title: 'Step 2' }}
            />
            <Stack.Screen
                name="BodyMeasurements"
                component={BodyMeasurements}
                options={{ title: 'Body Measurements' }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default Main;
