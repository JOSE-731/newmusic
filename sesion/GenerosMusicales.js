import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function GenerosMusicales({ navigation }){
    return(
        <View>
            <Text style={Estilos.tittle}>Ventana en mantenimiento</Text>
            <Image style={Estilos.imagen} source={require('../imagenes/error.jpg')} />
        </View>
    );
}

const Estilos = StyleSheet.create({
       imagen: {
        height: 580,
        width: 350,
        marginHorizontal: 5,
        marginBottom:20
    },

    tittle:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:40
    }

  })  