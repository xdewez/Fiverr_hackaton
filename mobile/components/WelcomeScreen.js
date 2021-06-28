import * as React from 'react';
import { Image, Text, StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default function WelcomeScreen(props) {

    const goTo = () => {
        props.navigation.push('Profil');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.img} source={require('../assets/logo_fiverr.png')} />
            </View>
            <View>
                <TouchableOpacity style={styles.btnPress} onPress={goTo}>
                    <Text style={styles.fontColor}>Welcome</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 260,
        height: 240,
        marginTop: 40,
        opacity: 0.8,
    },
    btnPress: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        width: 200,
        height: 50,
        opacity: 0.9,
        borderRadius: 50,
        backgroundColor: '#37D596',
        fontFamily: 'Arial',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.5,
        elevation: 6,
    },
    fontColor: {
        color: '#FFFFFF',
        fontSize: 20,
    }

});
