import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Pressable,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default function CategoryScreen(props) {

    const goTo = () => {
        props.navigation.push('Profil');
    };

    const goTeam = () => {
        props.navigation.push('Team');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <TouchableOpacity style={styles.btnGet} onPress={goTeam}>
                    <Text style={styles.font}>My Team</Text>
                </TouchableOpacity>
            </View>
            <Pressable style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Design</Text>
                </View>
            </Pressable>
            <Pressable style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/lion_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Writing</Text>
                </View>
            </Pressable>
            <Pressable style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Video</Text>
                </View>
            </Pressable>
            <View style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/lion_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Audio</Text>
                </View>
            </View>
            <View style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Business</Text>
                </View>
            </View>
            <View style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/lion_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Lifestyle</Text>
                </View>
            </View>
            <View style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Programming</Text>
                </View>
            </View>
            <View style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/lion_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Data</Text>
                </View>
            </View>
            <View style={styles.vignette} onPress={goTo}>
                <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
                <View style={styles.userName}>
                    <Text style={styles.text}>Marketing</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
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
        color: '#37D596',
        fontSize: 18,
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: "lightgrey",
    },
    plus: {
        fontSize: 25,
        color: '#37D596'
    },
    btnGet: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 50,
        marginTop: 10,
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
    font: {
        color: '#FFFFFF',
        fontSize: 20,
    },
})
