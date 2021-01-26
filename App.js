import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ListScreen from './src/screens/ListScreen'
import DetailScreen from './src/screens/DetailScreen'

const navigator = createStackNavigator(
    {
        Search: ListScreen,
        Details: DetailScreen,
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Restaurant Search'
        }
    }
)

export default createAppContainer(navigator)