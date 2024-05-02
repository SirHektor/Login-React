import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {

    const navigation = useNavigation();

    useFonts({ 'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf') });

    return (
        
        <View style={styles.container} >
            <View style={styles.containerLogo}>
                <Animatable.Image animation={"flipInY"} delay={1000} source={require('../assets/logo_Senai.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp'  style={styles.containerForm}>
                <Text style={styles.title}>
                    Monitore e organize seus recursos didáticos de qualquer lugar!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('entrada')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#880000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 14,
        color: "#FFF",
        fontFamily: 'Oswald',
    },
    text: {
        fontSize: 10,
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#880000',
        fontWeight: 'bold'
    }
})
