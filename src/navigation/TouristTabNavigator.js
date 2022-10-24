import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

import VirtualTourScreen from '../screens/VirtualTourScreen';
import VirtualTourScreen2 from '../screens/VirtualTourScreen2';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import AddToursScreen from '../screens/AddToursScreen';
import TouristHomeScreen from '../screens/Tourist/TouristHomeScreen';
import MapViewScreen from '../screens/Tourist/MapViewScreen';
import SearchTourGuidesScreen from '../screens/Tourist/SearchTourGuidesScreen';
import SpeechToTextScreen from '../screens/Tourist/SpeechToTextScreen';
import CheckWeather from '../screens/Tourist/CheckWeather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VisitWeather from '../../src/screens/Tourist/VisitWeather';
import MapViewScreen1 from '../screens/Tourist/MapViewScreen';
import MapViewScreen2 from '../screens/Tourist/MapViewScreen';
import MapViewScreen3 from '../screens/Tourist/MapViewScreen';
import MapViewScreen4 from '../screens/Tourist/MapViewScreen';
import MapViewScreen5 from '../screens/Tourist/MapViewScreen';

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
        name="VirtualTour2"
        component={VirtualTourScreen2}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="SearchTourGuides"
        component={SearchTourGuidesScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="VisitWeather"
        component={VisitWeather}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapView1"
        component={MapViewScreen1}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="map" size={22} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="MapView2"
        component={MapViewScreen2}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="map" size={22} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="MapView3"
        component={MapViewScreen3}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="map" size={22} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="MapView4"
        component={MapViewScreen4}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="map" size={22} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="MapView5"
        component={MapViewScreen5}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="map" size={22} color={color} />
          ),
        }}
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
        name="weather"
        component={CheckWeather}
        options={{
          // tabBarBadge: 5,
          // tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="rainy" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="SpeechToText"
        component={SpeechToTextScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
            name="translate"
            size={size}
            color={color}
          />
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
