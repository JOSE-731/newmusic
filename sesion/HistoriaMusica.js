import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

export default function HistoriaMusica({ navigation }) {
    return (
        <ScrollView>
            <Text style={Estilos.title}>La musica</Text>
            <View>
                <Image style={Estilos.imagen} source={require('../imagenes/musicahistory.png')} />
            </View>
            <View>
                <Text style={Estilos.titleText}>
                    Se conoce como música a la combinación ordenada de ritmo, melodía y armonía que resulta agradable a los oídos. Por su carácter inmaterial, la música se considera un arte temporal o del tiempo, al igual que la literatura.
                    En el sentido restrictivo, la música es el arte de coordinar y transmitir efectos sonoros, armoniosos y estéticamente válidos, los cuales son generados a través de la voz o de instrumentos musicales.
                </Text>
                <Text>
                    En un sentido amplio, la música nace con los seres humanos, ya que según algunos estudios estaba presente mucho antes de la migración de los primeros grupos que dejaron África hace más de 50 000 años.
                    Por lo tanto se puede considerar una manifestación cultural mundial.
                </Text>
            </View>
            <Text style={Estilos.titleAnte}>Antecedentes</Text>
            <View>
                <Text style={Estilos.titleText}> Nuestros antepasados inventaron la música, tribus nómadas descubren los encantos de la vida sedentaria. Se afincan en valles fértiles o fundan pueblos y luego ciudades. Los pobladores de algunos valles como el Tigris y Éufrates, Nilo, Río Amarillo... fueron los primeros en muchas cosas: metales, carros de ruedas, escrituras, aritmética y música.</Text>
                <Text>Existen numerosos géneros musicales de tipo popular. Por ejemplo: bolero, bossa nova, son, salsa, merengue, canción, balada, rock and roll y sus vertientes, jazz, música pop, etc.</Text>
            </View>

            <ScrollView horizontal>
                <View>
                    <Image style={Estilos.imagen} source={require('../imagenes/antecedentes3.jpg')} />
                </View>
                <View>
                    <Image style={Estilos.imagen} source={require('../imagenes/antecedentes1.jpeg')} />
                </View>
                <View>
                    <Image style={Estilos.imagen} source={require('../imagenes/antecedentes2.jpg')} />
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const Estilos = StyleSheet.create({
    imagen: {
        height: 180,
        width: 350,
        marginHorizontal: 5,
        marginBottom:20
    },
    title: {
        fontSize: 50,
        color: 'red',
        marginHorizontal: 35,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleAnte:{
        fontSize: 30,
        color: 'red',
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
        marginHorizontal: 65,
    },
    titleText:{
        marginBottom:9
    }
   
})