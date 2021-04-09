const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
const axios = require('axios');

require('dotenv').config();

// array to store images from api
let imageArray = [];

// return searched giphy images
router.post('/', (req, res) => {
    console.log('in /giphy GET');
    const searchQuery = req.body.searchQuery;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchQuery}&limit=5`).then((response) => {
        console.log('back from giphy call with:', response.data.data);
        imageArray = response.data.data;
        console.log('imagearray:', imageArray);
    }).catch((err) => {
        console.log(err);
    });
    if (imageArray !== []) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(500);
    }
});

router.get('/', (req, res) => {
    res.send(imageArray);
})

module.exports = router;