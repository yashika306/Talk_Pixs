

import React from 'react'
import{DefaultTheme} from'@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

let theme ={
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    background:'#fff'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Home" component={Home} />
    
    </Stack.Navigator>
  </NavigationContainer>
  )
}