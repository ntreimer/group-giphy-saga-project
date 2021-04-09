import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function FavoritesList() {

    const history = useHistory();

    const favFunction = () =>{
        console.log( 'in favFunction' );
        
    }

    const handleButtonClick = () =>{
        console.log( 'in handleButtonClick' );
        history.push('/');
    }

    return (
        <div>
            <p>I'm FavoritesList!</p>
            <select  onChange={ favFunction }>
                <option>All</option>
                <option>Funny</option>
                <option>Cohort</option>
                <option>Cartoon</option>
                <option>NSFW</option>
                <option>Meme</option>
            </select> 
            <div>
            <button onClick={ handleButtonClick }>Back to Search!</button>
            </div>
        </div>
    )
}

export default FavoritesList;
