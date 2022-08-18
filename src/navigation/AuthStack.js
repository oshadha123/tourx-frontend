import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen'
import AddToursScreen from '../screens/AddToursScreen';
import ForgetPassword from '../screens/ForgetPassword';
import EnterOtp from '../screens/EnterOtp';
import ResetPassword from '../screens/ResetPassword';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Moments" component={AddToursScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="EnterOtp" component={EnterOtp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />

    </Stack.Navigator>
  );
};

export default AuthStack;
