// import * as React from 'react';
// import { Image, Text, StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';

// export default function WelcomeScreen(props) {

//     const goTo = () => {
//         props.navigation.push('GetStarted');
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <View>
//                 <Image style={styles.img} source={require('../assets/logo_fiverr.png')} />
//             </View>
//             <View>
//                 <TouchableOpacity style={styles.btnPress} onPress={goTo}>
//                     <Text style={styles.fontColor}>Welcome</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView >
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     img: {
//         width: 260,
//         height: 240,
//         marginTop: 40,
//         opacity: 0.8,
//     },
//     btnPress: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 70,
//         width: 200,
//         height: 50,
//         opacity: 0.9,
//         borderRadius: 50,
//         backgroundColor: '#37D596',
//         fontFamily: 'Arial',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 2.5,
//         elevation: 6,
//     },
//     fontColor: {
//         color: '#FFFFFF',
//         fontSize: 20,
//     }

// });


import React, { useRef } from 'react';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


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

// You can then use your `FadeInView` in place of a `View` in your components:
export default function WelcomeScreen(props) {

    const goTo = () => {
        props.navigation.push('GetStarted');
    };

    return (
        <View style={styles.container}>
            <FadeInView>
                <Image style={styles.img} source={require('../assets/logo_fiverr.png')} />
            </FadeInView>
            <TouchableOpacity style={styles.btnPress} onPress={goTo}>
                <Text style={styles.fontColor}>Welcome</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fadeinView: {
        width: 250,
        height: 50,
        backgroundColor: 'powderblue'
    },
    img: {
        width: 260,
        height: 240,
        opacity: 0.8,
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
    btnPress: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        width: '60%',
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
