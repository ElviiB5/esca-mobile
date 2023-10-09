import React from 'react';

import PoliticalParty from '../screens/Admin/CreatePoliticalParty/CreatePoliticalParty';
import PoliticalParties from '../screens/PoliticalParties/PoliticalParties'
import PoliticalPartyInfo from '../screens/PoliticalPartyInfo/PoliticalPartyInfo'
import Vote from '../screens/Vote/Vote'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PoliticalParty" component={PoliticalParty} />
      <Tab.Screen name="PoliticalParties" component={PoliticalParties} />
    </Tab.Navigator>
  );
}

export default AppStack;