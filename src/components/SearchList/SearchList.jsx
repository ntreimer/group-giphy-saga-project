import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import SearchItem from '../SearchItem/SearchItem';

function SearchList() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');


    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const giphy = useSelector((store) => {
        console.log('useselector:', store.giphySearchResults);
        return store.giphySearchResults;
    })
    
    const getGifs = () =>{
        console.log('in getGifs');
        dispatch({type: "SEARCH_RESULTS", payload: searchQuery})

    }

    const toFavorites = () =>{
        console.log( 'in toFavorites' );
        history.push('/favorites');
    }

    const canWeMap = () => {
        if (giphy.map) {
            console.log('we can map!');
            return (giphy.map((gif, index) => <SearchItem gif={gif} key={index}/>))
        }
        else {
            console.log('cant map');
            return '';
        }
    }
    return (
        <div>
            <h2>Search for Gifs</h2>
            <input type="text" value={searchQuery} onChange={handleChange} ></input>
            <button onClick={getGifs}>Search</button>
            {canWeMap()}
            <button onClick={ toFavorites }>Your Favorites!</button>
        </div>
    );
}

export default SearchList;
