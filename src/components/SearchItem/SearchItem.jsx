import React, { useState } from 'react';
import axios from 'axios';


function SearchItem() {

    const [gif, setGif] = useState('')

    const getGifs = () =>{
        axios.get('/giphy').then( ( response )=>{
            console.log( response.data );
            setGif(response.data)
        }).catch( (err) =>{
            console.log(err);
        })
    }

    return (
        <div>
            <h2>Search for Gifs</h2>
            <input type="text" placeholder="GIF"></input>
            <button onClick={() => getGifs()}>Search</button>
            <p> <img src={gif} /> </p>
        </div>
    );
}

export default SearchItem;
