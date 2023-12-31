import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { primaryColor, textColor } from './colors';
import Swiper from 'react-native-swiper';


const Home = () => {

    const navigation = useNavigation();

    const handlepressAzkar =() => {
        
        navigation.navigate(NAVIGATION_ROUTES.AZKAR);
    };

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
                    <TouchableOpacity onPress={handlepressAzkar}>
                        <Text style={style.azkartext}>Azkar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, borderWidth: 1, marginHorizontal: '2%', borderRadius: 20, margin: '2%' }}></View>
            </View>

        </View>
    );
    };

const style = StyleSheet.create({

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    welcomecontainer: {
        flex: 1,
    },
    headingContainer: {
        flex: 1,
        padding: '10%',
    },
    welcomeText: {
        fontSize: 33,
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
    azkartext:{
        color: primaryColor,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }

});


export default Home;
