import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Index from "./sesion/Index";
import Num from "./sesion/Num";
import Digito from "./sesion/Digito";
import Email from "./sesion/Email";
import Menu from "./sesion/Menu";
import HistoriaMusica from './sesion/HistoriaMusica';
import Intrumentos from "./sesion/Intrumentos";
import GenerosMusicales from "./sesion/GenerosMusicales";
import Contacto from "./sesion/Contacto";

export default function () {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="NewMusic"
                    component={Index}
                    options={{
                        title: "Welcome",
                        headerStyle: {
                            backgroundColor: 'red'
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            marginHorizontal: 90,
                            fontSize: 30
                        },
                    }}
                />

                <Stack.Screen
                    name="Registrate"
                    component={Num}
                    options={{
                        title: "Registrate",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                <Stack.Screen
                    name="Digito"
                    component={Digito}
                    options={{
                        title: "Digito de Verificación",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                <Stack.Screen
                    name="Email"
                    component={Email}
                    options={{
                        title: "Email de Verificación",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        title: "Menu",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                <Stack.Screen
                    name="HistoriaMusica"
                    component={HistoriaMusica}
                    options={{
                        title: "Historia de la Musica",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                <Stack.Screen
                    name="Intrumentos"
                    component={Intrumentos}
                    options={{
                        title: "Instrumentos",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                <Stack.Screen
                    name="GenerosMusicales"
                    component={GenerosMusicales}
                    options={{
                        title: "Generos",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />

                 <Stack.Screen
                    name="Contacto"
                    component={Contacto}
                    options={{
                        title: "Contactos",
                        headerStyle: {
                            backgroundColor: 'red'
                        }
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>

    );
}



