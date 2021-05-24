import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function Menu({ navigation }) {
    return (
        <View>
            <View style={Estilos.cardUno}>
                <Text style={Estilos.TitlecardUno} onPress={() => navigation.navigate('HistoriaMusica')}>Historia de la música</Text>
            </View>

            <View style={Estilos.cardDos}>
                <Text style={Estilos.TitlecardDos} onPress={() => navigation.navigate('Intrumentos')}>Instrumentos</Text>
            </View>

            <View style={Estilos.cardTres}>
                <Text style={Estilos.TitlecardTres} onPress={() => navigation.navigate('GenerosMusicales')}>Generos musicales</Text>
            </View>

            <View style={Estilos.cardTres}>
                <Text style={Estilos.TitlecardTres} onPress={() => navigation.navigate('Contacto')}>Contactanos</Text>
            </View>
        </View>
    );
}

const Estilos = StyleSheet.create({
    cardUno: {
        backgroundColor: '#92b484',
        marginTop: 40,
        height: 60,
        width: 350,
        marginHorizontal: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 4,
    },
    TitlecardUno: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 44,
        marginVertical: 15,
    },

    cardDos: {
        backgroundColor: '#92b484',
        marginTop: 40,
        height: 60,
        width: 350,
        marginHorizontal: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 4,
    },
    TitlecardDos:{
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 90,
        marginVertical: 15,
    },
    cardTres:{
        backgroundColor: '#92b484',
        marginTop: 40,
        height: 60,
        width: 350,
        marginHorizontal: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 4,
    },
    TitlecardTres:{
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 55,
        marginVertical: 15,
    }
})