import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import ContactScreen from './src/screens/ContactScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';
import CallScreen from './src/screens/CallScreen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigation />
    </>
  );
};

export default App;
