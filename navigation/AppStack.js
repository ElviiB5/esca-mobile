import React from 'react';

import PoliticalParties from '../screens/PoliticalParties/PoliticalParties'
import PoliticalPartyInfo from '../screens/PoliticalPartyInfo/PoliticalPartyInfo'
import Vote from '../screens/Vote/Vote'
import Profile from '../screens/Profile/Profile'
import Home from '../screens/Home/Home';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#F79BD3',
        tabBarInactiveTintColor: '#B1B2FF',
        tabBarStyle: {
          backgroundColor: '#D2DAFF',
          paddingBottom: 3,
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerStyle: {
            backgroundColor: '#D2DAFF',
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen 
        name="PoliticalParties" 
        component={PoliticalParties} 
        options={{
          headerStyle: {
            backgroundColor: '#D2DAFF',
          },
          tabBarLabel: 'Partidos políticos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen 
        name="Vote" 
        component={Vote} 
        options={{
          headerStyle: {
            backgroundColor: '#D2DAFF',
          },
          tabBarLabel: 'Votos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#D2DAFF',
          },
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="PoliticalPartyInfo" component={PoliticalPartyInfo} />
    </Stack.Navigator>
  );
}

export default AppStack;