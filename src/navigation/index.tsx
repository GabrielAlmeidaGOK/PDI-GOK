import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/Login';
import Repositories from '../screens/Repositories'
import {RootStackParamList} from '../screens/RootStack';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Auth" 
            component={AuthScreen}   
            options={{
            headerShown: false,
            }}
        />
         <Stack.Screen 
            name="Repositories" 
            component={Repositories}   
            options={{
            headerShown: false,
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}