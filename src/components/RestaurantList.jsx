import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Animated} from "react-native";
import {FlatList} from "react-native";
import RestaurantDetails from "./RestaurantDetails";
import {withNavigation} from "react-navigation";

const RestaurantList = ({title, restaurants, navigation}) => {
    if (!restaurants.length) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showVerticalScrollIndicator={false}
                data={restaurants}
                keyExtractor={item => item.restaurant.id}
                renderItem={({item}) => {
                    return (

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Details', {id: item.restaurant.id})}
                    >
                        <RestaurantDetails restaurant={item.restaurant}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginBottom: 5
        },
        container: {
            marginBottom: 10,
        }
    }
)

export default withNavigation(RestaurantList)