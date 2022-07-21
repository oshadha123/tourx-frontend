import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
// import Login from './src/views/screens/Login';
import LoginScreen from './src/views/screens/LoginScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import ProfilePage from './src/views/screens/ProfilePage';
import React from 'react'
import Logout from './src/views/screens/Logout';
import Header from './src/components/Header';
import RegisterScreen from './src/views/screens/RegisterScreen';
// import SideBar from './src/components/SideBar';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    {/* <Stack.Screen name="SideBar" component={SideBar} /> */}

      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Header" component={Header} />

      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      




    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
