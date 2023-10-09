import React, { useContext } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthContext } from './context/AuthContext';

import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack'

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AuthProvider>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;