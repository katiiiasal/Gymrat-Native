import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Test from './pages/Test';

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
