import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

export default function Intrumentos({ navigation }) {
    return (
        <ScrollView>
            <Text style={Estilos.titlePadre}>Instrumentos</Text>
            <Text>La musica de Colombia, ha integrado elementos españoles, indígenas y africanos en sus nuevas formas de expresión y música folclórica, dentro de los instrumentos mas utilizados tenemos a :</Text>
            <View>
                <Text style={Estilos.titleHijo1}>Instrumentos del Vallenato</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/vallenato.png')} />
            </View>
            <View>
                <Text  style={Estilos.titleText}>Las melodías de estos cantos se interpretaron primero con la flauta de caña de millo o carrizo, abierta en sus dos extremos con cuatro orificios en su longitud y una lengüeta que forma la embocadura y pisa un hilo, sostenido por los dientes, para modular el sonido; a ella se sumaron la caja, tambor pequeño hecho artesanalmente del tronco hueco de los árboles secos y sellado en uno de sus extremos con un pedazo de cuero templado, y la guacharaca, instrumento ancestral indígena que se fabrica utilizando un pedazo de cañabrava a la que se le hacen pequeñas ranuras sucesivas para producir un sonido raspativo al ser frotadas con un hueso (originalmente).</Text>
                <Text  style={Estilos.titleText}>A finales del siglo XIX, décadas después de su invención, el acordeón llegó a Colombia por el puerto de Riohacha; los vaqueros y campesinos lo incorporaron a sus expresiones musicales, y paulatinamente fue sustituyendo al carrizo hasta convertirse en el instrumento principal del conjunto típico de vallenato.</Text>
                <Text  style={Estilos.titleText}>Además de estos tres instrumentos, caja, guacharaca y acordeón, que representan la trietnia que dio origen a la raza y cultura de la Costa Caribe colombiana, el conjunto típico vallenato presenta un cuarto elemento básico que es el cantante, de más o menos reciente incorporación a raíz de los festivales vallenatos, ya que hasta los años 1960 la costumbre era que el acordeonero llevaba la voz cantante e interpretara él mismo la letra de las canciones que tocaba.</Text>
            </View>
            <View>
                <Text style={Estilos.titleHijo2}>Acordeón diatónico</Text>
                <Text> Instrumento de origen austriaco, inventado en Viena en su forma actual por Cyrill Demian en 1829, introducido a Colombia de contrabando por inmigrantes alemanes procedentes de Curazao por Riohacha (en las costas de La Guajira) en 1885. Quienes lo interpretan lo modifican ellos mismos o lo mandan a modificar con expertos musicales para que produzca su característico sonido</Text>
            </View>
            <ScrollView horizontal>
                <View>
                    <Image style={Estilos.imagen} source={require('../imagenes/acordeon.png')} />
                </View>
                <View>
                    <Image style={Estilos.imagen} source={require('../imagenes/acordeon2.png')} />
                </View>
            </ScrollView>
            <View>
                <Text style={Estilos.titleHijo3}>Caja vallenata</Text>
                <Text> Instrumento de percusión de origen africano. Se trata de un tambor pequeño cuyo parche se fabricaba de buche de caimán, luego de piel de marimonda negra y, actualmente, de cuero de chivo, venado o carnero. El vaso se hace de un tronco de árbol hueco de 40 cm de alto y 30 cm de diámetro. El árbol debe ser de tronco fibroso como macurutú, cañaguate o matarratón.</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/caja.png')} />
            </View>
            <View>
                <Text style={Estilos.titleHijo4}>Guacharaca</Text>
                <Text> Instrumento cóncavo de fricción autóctono de los indígenas colombianos de 40 cm de largo, elaborado con el tallo de la uvita de lata. Su nombre proviene de la ortalis colombiana o pava silvestre, ave de monte cuyo canto es similar al sonido que produce el instrumento.9​ También se utiliza en su lugar el guache.</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/gucharaca.png')} />
            </View>
            <View>
                <Text style={Estilos.titleHijo5}>Champeta</Text>
                <Text>La Champeta es un fenómeno musical y cultural, de hecho social y género musical. Culturalmente, se originó en los barrios marginales de Cartagena de Indias y musicalmente, en las zonas afrodescendientes. Está vinculado con la cultura del corregimiento de palenque e influenciado por géneros de procedencia africana
                La concepción clásica de la champetería o champetudismo —champetuísmo en criollo español posee cuatro aspectos importantes: la expresión musical, su jerga distintiva, los "Picós" y los perreos —fiestas y verbenas—. Hay quienes dan la misma importancia a otros
                La Champeta surge como apelativo o hecho social en los años 1930, como baile en los años 70's y como género musical en los años 80.</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/champeta.png')} />
            </View>
            <View>
                <Text style={Estilos.titleHijo6}>Instrumentos de Champeta</Text>
                <Text>Bateria electrica</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/bateria.png')} />
                <Text>Guitarra electrica</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/guitarra.png')} />
                <Text>A diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, ya que esta es por inducción eléctrica a través de un amplificador de guitarra o también a través de un Pedal de efectos. El sonido de la guitarra se verá influido por el diseño y ubicación de las pastillas, la escala y en menor medida por el puente y la cejilla, el uso de los círculos de la escala modificará el sonido de cada una de sus cuerdas.</Text>
                <Text>Congas</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/congas.png')} />
                <Text>Bajo</Text>
                <Image style={Estilos.imagen} source={require('../imagenes/bajo.png')} />
            </View>
            <View>
                <Text style={Estilos.title}></Text>
                <Text></Text>
            </View>
        </ScrollView>

    );
}

const Estilos = StyleSheet.create({
    imagen: {
        height: 180,
        width: 350,
        marginHorizontal: 5,
        marginBottom:20,
        marginTop:10
    },
    titlePadre: {
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleHijo1:{
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleHijo2:{
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleHijo3:{
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleHijo4:{
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleHijo5:{
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleHijo6:{
        fontSize: 30,
        color: 'red',
        marginHorizontal: 75,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    titleText:{
        marginBottom:9
    }
})