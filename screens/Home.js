import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
<<<<<<< HEAD
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
=======
import { View, Text, StyleSheet, Image, } from 'react-native';
import { primaryColor, textColor, secondaryColor } from './colors';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
>>>>>>> 6729fd0ea7e93f8d1f453a50587df314753e4493

    const navigation = useNavigation();

    const RenderFlatlist = () => {
        const slides = [
            { id: '1', path: require('../Utils/Assets/images/1.jpg') },
            { id: '2', path: require('../Utils/Assets/images/2.jpg') },
            { id: '2', path: require('../Utils/Assets/images/3.jpg') },
            { id: '2', path: require('../Utils/Assets/images/4.jpg') },
        ];

        return slides.map((slide) => (
            <View key={slide.id} style={{ flex: 1, }}>
                <View style={{ flex: 1.5, }}>
                    <Image source={slide.path}
                        style={style.img}
                    />
                </View>
            </View>
        ))
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={style.welcomecontainer}>
                <Text style={style.welcomeText}>Assalam o Alaikume</Text>
                <Text style={style.welcomeToText}>To Riyaadah</Text>
            </View>

            <View style={{ flex: 3, marginHorizontal: '1%', }}>
                <Swiper
                    showsButtons={false}
                    autoplay={false}
                    loop={false}>
                    {RenderFlatlist()}
                </Swiper>
            </View>

            <View style={{ flex: 6, borderWidth: 1, }}>

                <View style={{ flex: 1, borderWidth: 1, marginHorizontal: '2%', borderRadius: 20, margin: '2%', justifyContent:'center' }}>
                    <TouchableOpacity>
                        <Text style={style.azkartext}>Azkar</Text>
                    </TouchableOpacity>
                </View>




                <View style={{ flex: 1, borderWidth: 1, marginHorizontal: '2%', borderRadius: 20, margin: '2%' }}></View>
            </View>

        </View>
    )
}
const style = StyleSheet.create({

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15

    },
    welcomecontainer: {
        flex: 1,
<<<<<<< HEAD
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
=======
        marginHorizontal: '1%',
        backgroundColor: secondaryColor,
    },
    welcomeText: {
        top: '15%',
        fontSize: 25,
>>>>>>> 6729fd0ea7e93f8d1f453a50587df314753e4493
        color: primaryColor,
        fontWeight: 'bold',
    },
    welcomeToText: {
        fontSize: 18,
        color: primaryColor,
<<<<<<< HEAD
        marginLeft: '2%',
    },
    body: {
        flex: 1,
        // margin: 10,
        borderWidth: 2,
    },

});
=======
        top: '10%',
    },
    azkartext:{
        color: primaryColor,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',


    }


})
>>>>>>> 6729fd0ea7e93f8d1f453a50587df314753e4493

export default Home;
