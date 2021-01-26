import React from 'react'
import { Searchbar } from 'react-native-paper';


const SearchBar = ({searchTerm, onSearchTermChange, onSearchTermSubmit}) => {
    return(
        <Searchbar
            placeholder="Type a name or cuisine"
            value={searchTerm}
            onChangeText={onSearchTermChange}
            onEndEditing={onSearchTermSubmit}
        />
    )
}

export default SearchBar