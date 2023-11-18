import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { Store } from './redux/store';

import Stacks from './navigation/Stacks';

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
          <Stacks />
      </NavigationContainer>
    </Provider>
  );
}

export default App;