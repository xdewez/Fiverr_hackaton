import * as React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

export default function GetStartedScreen(props) {

    const goTo = () => {
        props.navigation.push('Profil');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.img} source={require('../assets/dev.png')} />
            </View>
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
        margin: 15,
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
        width: 200,
        height: 200,
        margin: 40,
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