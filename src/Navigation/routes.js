import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import New from '../pages/New';
import Perfil from '../pages/Perfil1';
import Oracao from '../pages/oracao';
import Progamacao from '../pages/Programacao';

import {Entypo, FontAwesome5} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgorundColor: '#121212',
                    borderTopColor: 'transparent'
                },
                activeTintColor: '#FFF',
                tabBarStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                }
            }}>
                <Tab.Screen
                    name="Programação"
                    component={Progamacao}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Entypo name="calendar" size={size} color={color} />
                        )
                    }} />

                <Tab.Screen
                    name="Novo"
                    component={New}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Entypo name="circle-with-plus" size={size} color={color} />
                        )
                    }} />

                <Tab.Screen
                    name="Orações"
                    component={Oracao}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome5 name="pray" size={size} color={color} />
                        )
                    }} />
        </Tab.Navigator>
     )
   }