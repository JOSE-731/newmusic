import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';

export default function RegistrateNum({ navigation }) {
    return (
        <View>
            <View>
                <Image style={Estilos.imagen} source={require('../imagenes/imagenIndex.jpg')} />
            </View>

            <View>
                <TextInput
                    style={Estilos.input}
                    placeholder="Ingrese su numero de telefono"
                    keyboardType="numeric"
                />
            </View>

            <View>
                <TouchableHighlight style={Estilos.btnRegistrate}>
                    <Text style={Estilos.TitlebtnRegistrate} onPress={() => navigation.navigate('Digito')}>Ingresar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const Estilos = StyleSheet.create({
    imagen: {
        height: 180,
        width: 350,
        marginHorizontal: 5,
        marginTop: 5
    },
    input: {
        marginTop: 60,
        height: 90,
        width: 300,
        marginHorizontal: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },
    btnRegistrate: {
        backgroundColor: '#92b484',
        marginTop: 80,
        width: 150,
        height: 50,
        marginLeft: 95,
        borderBottomWidth: 2
      },
      TitlebtnRegistrate: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        fontSize: 20,
        fontWeight: 'bold',
      },
})