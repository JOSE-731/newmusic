import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, CheckBox } from 'react-native';
import firebase from '../database/firebase'

export default function Contacto({ navigation }) {

    const [state, setState] = useState({
        name:'',
        email:'',
        phone:'',
        mensaje:''
    })

    const saveNewUser =  async () =>{
        console.log(state)
       await firebase.db.collection('contacto').add({
            name: state.name,
            email:state.email,
            phone:state.phone,
            mensaje:state.mensaje
        })
    }
    return (
        <View>
            <View>
                <Text style={Estilos.title}>News Music</Text>
            </View>

            <View>
                <Text style={Estilos.titleText}>Nombre completo</Text>
                <TextInput
                    style={Estilos.input}
                    keyboardType="ascii-capable"
                    onChangeText={(value) => setState({...state, name:value})}
                />
            </View>

            <View>
                <Text style={Estilos.titleTextDos}>Correo electronico</Text>
                <TextInput
                    style={Estilos.inputDos}
                    keyboardType="ascii-capable"
                    onChangeText={(value) => setState({...state, email:value})}
                />
            </View>

            <View>
                <Text style={Estilos.titleTextTres}>Telefono</Text>
                <TextInput
                    style={Estilos.inputTres}
                    keyboardType="ascii-capable"
                    onChangeText={(value) => setState({...state, phone:value})}
                />
            </View>

            <View>
                <Text style={Estilos.titleTextTres}>Mensjae</Text>
                <TextInput
                    style={Estilos.inputTres}
                    keyboardType="ascii-capable"
                    onChangeText={(value) => setState({...state, sex:value})}
                />
            </View>

            <View>
                <TouchableHighlight style={Estilos.btnRegistrate} onPress={() => saveNewUser()}>
                    <Text style={Estilos.TitlebtnRegistrate} >Registrate</Text>
                </TouchableHighlight>
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
        paddingBottom: 1,
        fontWeight: 'bold',
    },
    input: {
        marginTop: -15,
        height: 50,
        width: 300,
        fontSize: 20,
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    titleText: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 80
    },
    titleTextDos: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 80
    },
    inputDos: {
        marginTop: -15,
        height: 50,
        width: 300,
        fontSize: 20,
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    titleTextTres: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 130
    },
    inputTres: {
        marginTop: -15,
        height: 50,
        width: 300,
        fontSize: 20,
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    titleTextCuatro: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    inputCuatro: {
        marginTop: -55,
        height: 50,
        width: 50,
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    titleTextCinco: {
        marginTop: -20,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 140
    },
    checkbox: {
        marginTop: -29,
        marginLeft: 200
    },
    titleCheckUno: {
        marginLeft: 235,
        marginTop: -30,
        fontSize: 20
    },
    checkboxDos: {
        marginTop: -32,
        marginLeft: 270
    },
    titleCheckDos: {
        marginLeft: 305,
        marginTop: -30,
        fontSize: 20
    },
    TitlebtnRegistrate: {
        paddingVertical: 10,
        paddingHorizontal: 52,
        fontSize: 20,
        fontWeight: 'bold',
    },
    btnRegistrate:{
        backgroundColor: '#92b484',
        marginTop: 70,
        width: 200,
        height: 50,
        marginLeft: 80,
        borderBottomWidth: 2,
    }



})