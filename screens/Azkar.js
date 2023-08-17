import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NavigationRoutes';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { primaryColor } from './colors';


const data = [
    {
        id: '1',
        name: 'Waking Up Azkar',
        description: 'Waking Up Azkar details',
    },
    {
        id: '2',
        name: 'أذكار الاستيقاظ',
        description: 'Waking Up Azkar details',
    },
    {
        id: '3',
        name: 'Waking Up Azkar',
        description: 'Waking Up Azkar details',
    },
    {
        id: '4',
        name: 'Waking Up Azkar',
        description: 'Waking Up Azkar details',
    },
    {
        id: '5',
        name: 'Waking Up Azkar',
        description: 'Waking Up Azkar details',
    },
    // Add more data items as needed
];

const AzkarItem = ({ name, description, index }) => {
    return (
        <View style={styles.containerAzkar}>
            <View style={styles.Iconecontainer}>
                <View style={styles.iconeStyle}>
                    <Text style={styles.iconText}>
                        {index + 1} {/* Display the counter value */}
                    </Text>
                </View>
            </View>
            <View style={styles.Detailcontainer}>
                <View style={styles.name}>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
                <View style={styles.descripation}>
                    <Text>{description}</Text>
                </View>
            </View>
        </View>
    );
};


const Azkar = () => {

    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Daily Azkar</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <AzkarItem index={index} name={item.name} description={item.description} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: primaryColor,
    },
    containerAzkar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        marginBottom: 5,
        elevation: 2,
    },
    Iconecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    iconeStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: primaryColor,
    },
    iconText: {
        color: primaryColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Detailcontainer: {
        flex: 1,
    },
    name: {
        flex: 1,
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: primaryColor,
        textAlign: 'left',
    },
    descripation: {
        flex: 1,
        marginTop: 5,
    },
});

export default Azkar;
