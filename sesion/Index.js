import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function Index({ navigation }) {
  return (
    <View>
      <View>
        <Text style={Estilos.title}>News Music</Text>
      </View>

      <View>
        <Image style={Estilos.imagen} source={require('../imagenes/imagenIndex.jpg')}/>
      </View>

      <View>
        <Text style={Estilos.titleSecundario}>Enterate acerca de la musica Colombiana</Text>
      </View>

      <View>
        <Text style={Estilos.titleTersario}>¡Unete ya mismo!</Text>
      </View>

      <View>
        <TouchableHighlight style={Estilos.btnRegistrate}>
          <Text style={Estilos.TitlebtnRegistrate} onPress={() => navigation.navigate('Registrate')}>Registrate</Text>
        </TouchableHighlight>

        <TouchableHighlight style={Estilos.btnSesión}>
          <Text onPress={() => navigation.navigate('Menu')} style={Estilos.TitlebtnSesión}>Inicia Sesión</Text>
        </TouchableHighlight>
      </View>

      <View style={Estilos.ContainerEmail}>
        <Text style={Estilos.TittleEmail} onPress={() => navigation.navigate('Email')}>Registrate con tu email</Text>
      </View>


    </View>
  );
}

const Estilos = StyleSheet.create({

  title: {
    fontSize: 50,
    color: 'red',
    marginHorizontal: 35,
    paddingTop: 5,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  imagen: {
    height: 180,
    width: 350,
    marginHorizontal: 5
  },
  titleSecundario: {
    fontSize: 18,
    marginHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  titleTersario: {
    color: 'red',
    fontSize: 15,
    marginHorizontal: 115,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  btnRegistrate: {
    backgroundColor: '#92b484',
    marginTop: 20,
    width: 150,
    height: 50,
    marginLeft: 15,
    borderBottomWidth: 2,
  },
  TitlebtnRegistrate: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnSesión: {
    backgroundColor: '#92b484',
    marginTop: 20,
    width: 150,
    height: 50,
    borderStartColor: 'red',
    borderColor: 'red',
    marginTop: -50,
    marginLeft: 190,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  TitlebtnSesión: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  TittleEmail: {
    marginHorizontal:70,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 31,
    color:'blue'
  },
  ContainerEmail: {
    height: 50
  }
})


