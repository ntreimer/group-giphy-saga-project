import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function SearchList() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');


    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    let gif = useSelector((store) => {
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

    return (
        <div>
            <h2>Search for Gifs</h2>
            <input type="text" value={searchQuery} onChange={handleChange} ></input>
            <button onClick={getGifs}>Search</button>
            <p> <img src={''} /> </p>
            <button onClick={ toFavorites }>Your Favorites!</button>
        </div>
    );
}

export default SearchList;
