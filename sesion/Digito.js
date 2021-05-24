import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';

export default function Digito({ navigation }) {
    return (
        <View>
          <View>
              <Text style={Estilos.title}>Ingrese el codigo de Verificación de 6 digitos</Text>
              <Text style={Estilos.titleDos}>que fue enviado al número</Text>
              <Text style={Estilos.titleTres}> celular que ingresó</Text>
          </View>

          <View>
            <TextInput
                style={Estilos.input}
                keyboardType="numeric"
                    />
          </View>
          
          <View>
            <TextInput
                style={Estilos.inputDos}
                keyboardType="numeric"
                    />
          </View>

          <View>
            <TextInput
                style={Estilos.inputTres}
                keyboardType="numeric"
                    />
          </View>

          <View>
            <TextInput
                style={Estilos.inputCuatro}
                keyboardType="numeric"
                    />
          </View>

          <View>
            <TextInput
                style={Estilos.inputCinco}
                keyboardType="numeric"
                    />
          </View>

          <View>
            <TextInput
                style={Estilos.inputSeis}
                keyboardType="numeric"
                    />
          </View>

            <View>
                <TouchableHighlight style={Estilos.btnRegistrate}>
                    <Text style={Estilos.TitlebtnRegistrate} onPress={() => navigation.navigate('Registrate')}>Confirmar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const Estilos = StyleSheet.create({
    btnRegistrate: {
        backgroundColor: '#92b484',
        marginTop: 100,
        width: 150,
        height: 50,
        marginLeft: 95,
        borderBottomWidth: 2
      },
      TitlebtnRegistrate: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        fontSize: 20,
        fontWeight: 'bold',
      },
      title:{
          marginTop:50,
          fontSize:17,
          fontWeight: 'bold',
          marginHorizontal:8,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
      },
      titleDos:{
        fontSize:17,
        fontWeight: 'bold',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginHorizontal:77
      },
      titleTres:{
        fontSize:17,
        fontWeight: 'bold',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginHorizontal:99
      },
      input: {
        marginTop: 60,
        height: 60,
        width: 30,
        fontSize:50,
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
    inputDos: {
        marginTop: -60,
        height: 60,
        width: 30,
        fontSize:50,
        marginHorizontal: 75,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
    inputTres: {
        marginTop: -60,
        height: 60,
        width: 30,
        fontSize:50,
        marginHorizontal: 129,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
    inputCuatro: {
        marginTop: -60,
        height: 60,
        width: 30,
        fontSize:50,
        marginHorizontal: 179,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
    inputCinco: {
        marginTop: -60,
        height: 60,
        width: 30,
        fontSize:50,
        marginHorizontal: 229,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
    inputSeis: {
        marginTop: -60,
        height: 60,
        width: 30,
        fontSize:50,
        marginHorizontal: 279,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
    
})