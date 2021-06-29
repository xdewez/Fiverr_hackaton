import * as React from 'react';
import {
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';

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

const DetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require('../assets/pirate_logo.jpg')} />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        width: '90%',
        height: 550,
        borderRadius: 10,
        margin: 15,
    },
});


export default DetailsScreen;