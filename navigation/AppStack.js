import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons'

import PoliticalParty from '../screens/Admin/CreatePoliticalParty/CreatePoliticalParty';
import PoliticalParties from '../screens/PoliticalParties/PoliticalParties'
import PoliticalPartyInfo from '../screens/PoliticalPartyInfo/PoliticalPartyInfo'
import Vote from '../screens/Vote/Vote'

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
        },
        }}
    >
      <Drawer.Screen 
        name="PoliticalParty"
        component={PoliticalParty} 
      />
      <Drawer.Screen 
        name="Vote"
        component={Vote}
      />
    </Drawer.Navigator>
  );
}


// const AuthStack = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#aa18ea',
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#333',
//         drawerLabelStyle: {
//           marginLeft: -25,
//           fontFamily: 'Roboto-Medium',
//           fontSize: 15,
//         },
//       }}>
//       <Drawer.Screen
//         name="PoliticalParty"
//         component={PoliticalParty}
//         options={{
//           drawerIcon: ({color}) => (
//             <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
//           ),
//         }}
//       />
//       <Drawer.Screen
//         options={{
//           drawerIcon: ({color}) => (
//             <EvilIcons name='arrow-right' size={52} color={"#B1B2FF"}/>
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

export default AppStack;