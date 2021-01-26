import {useState, useEffect} from 'react'
import zomatoApi from "../api/zomatoApi";
export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const res = await zomatoApi.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`)
            setRestaurants(res.data.restaurants)
        } catch (e) {
            setError('Try again!')
        }
    }
    useEffect(() =>{
        searchApi('')
    }, [])
    return [searchApi, restaurants, error]
}