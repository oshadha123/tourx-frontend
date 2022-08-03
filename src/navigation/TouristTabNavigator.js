import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

import VirtualTourScreen from '../screens/VirtualTourScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import AddToursScreen from '../screens/AddToursScreen';
import TouristHomeScreen from '../screens/Tourist/TouristHomeScreen';
import MapView from '../screens/Tourist/MapView';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TouristHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VirtualTour"
        component={VirtualTourScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#9A52C7'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'pink',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#9A52C7',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="MapView"
        component={MapView}
        options={{
          // tabBarBadge: 5,
          // tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarIcon: ({color, size}) => (
            <Feather name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'VirtualTour' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
