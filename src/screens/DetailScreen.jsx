import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import zomatoApi from '../api/zomatoApi';

const DetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await zomatoApi.get(`/restaurant?res_id=${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <Image style={styles.image} source={{ uri: result.thumb }} />
                    <Text style={styles.title}>{result.name}</Text>
                    <Text style={styles.name}>Average Cost For Two </Text>
                    <Text>{result.currency} {result.average_cost_for_two}</Text>
                    <Text style={styles.name}>Cuisines</Text>
                    <Text>{result.cuisines}</Text>
                    <Text style={styles.name}>Timings</Text>
                    <Text>{result.timings}</Text>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        padding: 0
    },
    image: {
        width: 'auto',
        height: 200,
        borderRadius: 4,
        marginVertical: 5
    },
    name: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',

    }
});

export default DetailScreen;