import React, { useState } from 'react';
import axios from 'axios';


function SearchItem(props) {
    console.log('props:', props);

    return (
        <div>
            <img src={props.gif.images.fixed_height.url}/>
        </div>
    );
}

export default SearchItem;
