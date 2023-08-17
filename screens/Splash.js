import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
import { primaryColor, secondaryColor, textColor } from './colors';

const Splash = () => {

    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home'); 
        }, 5000); // 3000 milliseconds (3 seconds)
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            {/* <View style={styles.curveLine}></View> */}
            <View style={styles.centerText}>
                <Image
                    style={styles.logo}
                    source={require('../Utils/Assets/images/splash.png')}
                />
                <Text style={styles.arabicText}>رياضة</Text>
                <Text style={styles.englishText}>RIYAADAH</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
    },
    curveLine: {
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
    },
    centerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    englishText: {
        fontSize: 24,
        color: textColor,
    },
    arabicText: {
        fontSize: 42,
        color: textColor,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logo: {
        width: 350,
        height: 200,
        marginTop: 20,
    },
});

export default Splash;
