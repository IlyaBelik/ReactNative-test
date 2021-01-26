import React, {useEffect, useState} from 'react'
import {Text, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import RestaurantList from "../components/RestaurantList";
import {Button} from "react-native-paper";

const ListScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceSort, setPriceSort] = useState([]);
    const [ratingSort, setRatingSort] = useState([]);
    const [searchApi, restaurants, error] = useResult()


    const SortByPrice = async () => {
      await setPriceSort(restaurants.sort((a, b) => a.restaurant.average_cost_for_two - b.restaurant.average_cost_for_two))
    }

    useEffect(() => {
        SortByPrice(priceSort)
    }, [])

    const SortByRating = async () => {
       await setRatingSort(restaurants.sort((a, b) => b.restaurant.user_rating.aggregate_rating - a.restaurant.user_rating.aggregate_rating))
    }

    useEffect(() => {
        SortByRating(ratingSort)
    }, [])

    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onSearchTermSubmit={() => searchApi(searchTerm)}
            />

            {error ? <Text>{error}</Text> : null}
            <Button title='Sort by price' mode='text' color='#a3a2a2' onPress={() => SortByPrice()}>
                Lowest price
            </Button>
            <Button title='Sort by rating' mode='text' color='#a3a2a2' onPress={() => SortByRating()}>
                Most Popular
            </Button>
            <ScrollView>
                <RestaurantList restaurants={restaurants} title='All restaurants'/>
            </ScrollView>
        </>
    )
}

export default ListScreen