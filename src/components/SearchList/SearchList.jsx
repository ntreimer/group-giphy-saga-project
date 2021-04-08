import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

function SearchList() {
    const [gif, setGif] = useState('')

    const getGifs = () =>{
        console.log('in getGifs');
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
            <input type="text" placeholder="Category"></input>
            <button onClick={() => getGifs()}>Search</button>
            <p> <img src={gif} /> </p>
        </div>
    );
}

export default SearchList
