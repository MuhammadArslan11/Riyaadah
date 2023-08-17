import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor, textColor } from './colors';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.curveLine}></View>
            <View style={styles.headingContainer}>
                <Text style={styles.welcomeText}>WELCOME</Text>
                <Text style={styles.welcomeToText}>To Riyaadah</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity>
                    <View style={styles.button}>
                    </View>
                </TouchableOpacity>

            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: 10,
        // borderWidth: 2,
    },
    curveLine: {
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        borderWidth: 4,
        // borderColor: primaryColor,
        borderBlockEndColor: primaryColor,
        // borderBottomColor: primaryColor,
        // borderBlockStartColor: primaryColor,
        // borderLeftColor: primaryColor,
        // borderRightColor: primaryColor,
        // borderTopColor: primaryColor,
    },
    headingContainer: {
        flex: 1,
        padding: '10%',
        // borderWidth: 2,
    },
    welcomeText: {
        fontSize: 33,
        // margin: 10,
        color: primaryColor,
        fontWeight: 'bold',
    },
    welcomeToText: {
        fontSize: 18,
        color: primaryColor,
        marginLeft: '2%',
    },
    body: {
        flex: 1,
        // margin: 10,
        borderWidth: 2,
    },

});

export default Home;
