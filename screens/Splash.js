import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
import { primaryColor, secondaryColor, textColor } from './colors';

const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.curveLine}></View>
            <View style={styles.centerText}>
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
        height: 150, // Adjust height as needed
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: 300,
        left: 0,
    },
    centerText: {
        alignItems: 'center',
        marginBottom: 20,
    },
    englishText: {
        fontSize: 20,
        color: textColor, // Text color
    },
    arabicText: {
        fontSize: 60,
        color: textColor, // Text color
        fontWeight: 'bold',
    },
});

export default Splash;
