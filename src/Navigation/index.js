import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Stack Pages/Login/index';
import Routes from './routes';
import Details from '../Stack Pages/Details';
import Register from '../Stack Pages/Register';
import Glogin from '../Stack Pages/Login/google';
import EventsDetails from '../Stack Pages/events';

const Stack = createStackNavigator();

export default function Naviagtion() {

  return (
      <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
            <Stack.Screen name="Main" component={Routes} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={Details} /> 
            <Stack.Screen name="Events" component={EventsDetails}/>
      </Stack.Navigator>
  )
}