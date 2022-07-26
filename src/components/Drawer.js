import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OnBoardScreen from '../views/screens/OnBoardScreen';
import ProfilePage from '../views/screens/ProfilePage';

const DrawerNavigator = createDrawerNavigator();

function Drawer() {
    return (
      <DrawerNavigator.Navigator useLegacyImplementation screenOptions={{
        headerTintColor:'black',
        backgroundColor:'rgba(0,0,0,0.4)',
        drawerPosition: 'right',
        drawerType:'slide',
        drawerStyle: {
        },
      }}>
        <DrawerNavigator.Screen name="Home" component={OnBoardScreen} />
        <DrawerNavigator.Screen name="Profile" component={ProfilePage} />
      </DrawerNavigator.Navigator>
    );
  }

export default Drawer;