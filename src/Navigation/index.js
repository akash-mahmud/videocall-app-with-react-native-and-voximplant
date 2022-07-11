
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactScreen from '../screens/ContactScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import LoginScreen from '../screens/LoginScreen';
import CallScreen from '../screens/CallScreen';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Contacts" component={ContactScreen}  />
      <Stack.Screen name="Call" component={CallScreen}  />
      <Stack.Screen name="Calling" component={CallingScreen}  />
        <Stack.Screen name="IncomingCall" component={IncomingCallScreen}  />
        </Stack.Group>
   
      </Stack.Navigator>
  
    </NavigationContainer>
  )
}