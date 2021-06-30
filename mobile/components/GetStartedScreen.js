import React, { useRef } from 'react';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 3000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default function GetStartedScreen(props) {

    const goTo = () => {
        props.navigation.push('Category');
    };

    return (
        <SafeAreaView style={styles.container}>
            <FadeInView>
                <Image style={styles.img} source={require('../assets/logo_fiverr.png')} />
            </FadeInView>
            <Text style={styles.text}>Create Your Fiverr's Team</Text>
            <TouchableOpacity style={styles.btnGet} onPress={goTo}>
                <Text style={styles.font}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
    },
    btnGet: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 50,
        marginTop: 40,
        backgroundColor: '#37D596',
        color: '#FFFFFF',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.5,
        elevation: 6,
    },
    img: {
        width: 250,
        height: 250,
        shadowOpacity: 0.27,
        shadowRadius: 2.5,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.5,
        elevation: 6,
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10
    },
    text: {
        color: '#37D596',
        fontSize: 20,
    },
    font: {
        color: '#FFFFFF',
        fontSize: 20,
    },
})