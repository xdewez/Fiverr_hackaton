import * as React from 'react';
import {
    View,
    ScrollView,
    Pressable,
    StyleSheet,
    Image,
    Text
} from 'react-native';

export default function ProfilScreen(props) {

    const goTo = () => {
        props.navigation.push('Details');
    };

    return (
        <ScrollView style={styles.container}>
            <Pressable style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Design</Text>
                    <Text style={styles.plus}>+</Text>
                </View>
            </Pressable>
            <Pressable style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/lion_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Developpement</Text>
                    <Text style={styles.plus}>+</Text>
                </View>
            </Pressable>
            <Pressable style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Illustration</Text>
                    <Text style={styles.plus}>+</Text>
                </View>
            </Pressable>
            <View style={styles.vignette}>
                <Image style={styles.img} source={require('../assets/owl_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Backend</Text>
                    <Text style={styles.plus}>+</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vignette: {
        margin: 15,
        width: '90%',
        height: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowOpacity: 0.27,
        shadowRadius: 2.5,
        elevation: 6,
    },
    img: {
        width: '100%',
        height: 120,
    },
    userName: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginRight: 15,
        marginLeft: 15,
    },
    text: {
        color: '#37D596'
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: "lightgrey",
    },
    plus: {
        fontSize: 25,
        color: '#37D596'
    }
})
