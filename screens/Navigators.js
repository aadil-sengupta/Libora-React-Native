import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './Auth/Welcome';
import LoginScreen from './Auth/login';
import RegisterScreen from './Auth/register';
import DrawerNav from './Main/DrawerNav';
import { createStackNavigator } from '@react-navigation/stack';

//Reading
import BookView from './Main/Reading/BookView';
// Reading End

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export const MainStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        {/* Reading */}
        
        <Stack.Screen name="BookView" component={BookView} />
        {/* Reading End */}
      </Stack.Navigator>
    )
  }