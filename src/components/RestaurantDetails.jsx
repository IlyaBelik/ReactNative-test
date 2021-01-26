import React from 'react'
import {View, Image, Text, StyleSheet} from "react-native";

const RestaurantDetails = ({restaurant}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: restaurant.thumb}}/>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.rating}>{restaurant.user_rating.aggregate_rating} stars, {restaurant.average_cost_for_two}$</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 20,
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            padding: 15,
        },
        image: {
            width: 'auto',
            height: 200,
            borderRadius: 10,
            marginBottom: 5
        },
        name: {
            fontWeight: 'bold'
        },
        rating: {
            fontSize: 12,
            opacity: .7
        }
    }
)

export default RestaurantDetails