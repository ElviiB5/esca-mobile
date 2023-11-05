import React from 'react';

import PoliticalParties from '../screens/PoliticalParties/PoliticalParties'
import PoliticalPartyInfo from '../screens/PoliticalPartyInfo/PoliticalPartyInfo'
import EditProfile from '../screens/Profile/Edit-Profile/EditProfile';
import Vote from '../screens/Vote/Vote'
import Profile from '../screens/Profile/Profile'
import Edit_PoliticalParties from '../screens/PoliticalParties/Edit-PiliticalParties/Edit_PoliticalParties';
import Home from '../screens/Home/Home';
import Votes from '../screens/Votes/Votes';
import FontAwesome from '@expo/vector-icons/FontAwesome'
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
            <Ionicons name="ios-flag" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen 
        name="Vote" 
        component={Vote} 
        options={{
          headerStyle: {
            backgroundColor: '#D2DAFF',
          },
          tabBarLabel: 'Votar',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="check-square" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen 
        name="Votes" 
        component={Votes}
        options={{
          headerStyle: {
            backgroundColor: '#D2DAFF',
          },
          tabBarLabel: 'Votos',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="globe" color={color} size={size} />
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
              <FontAwesome name="user-circle" color={color} size={size} />
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
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit_PoliticalParties" component={Edit_PoliticalParties} />
      <Stack.Screen name="PoliticalParties" component={PoliticalParties} />
    </Stack.Navigator>
  );
}

export default AppStack;