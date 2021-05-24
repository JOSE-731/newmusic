import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Num from "./sesion/Num";
import Index from "./sesion/Index";

const Routes = () => {
    const Stack = createStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                </Stack.Navigator>
            </NavigationContainer>
        </>

    )
}

export default Routes;

