import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
import { View, Text, StyleSheet } from 'react-native';
import { primaryColor, textColor } from './colors';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>WELCOME</Text>
            <Text style={styles.welcomeToText}>To Riyaadah</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    welcomeText: {
        fontSize: 30,
        // margin: 10,
        color: primaryColor,
        fontWeight: 'bold',
    },
    welcomeToText: {
        fontSize: 20,
        color: primaryColor,
    },
});

export default Home;
