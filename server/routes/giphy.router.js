const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
const axios = require('axios');

require('dotenv').config();

// array to store images from api
const imageArray = ['fdas'];

// return searched giphy images
router.post('/', (req, res) => {
    console.log('in /giphy GET');
    console.log('req.body:', req.body);
    const searchQuery = req.body;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchQuery}&limit=3`).then((res) => {
        console.log(res);
        [...imageArray, response.data]
        console.log(imageArray);
    }).catch((err) => {
        console.log(err);
    });
});

router.get('/', (req, res) => {
    res.send(imageArray);
})

module.exports = router;