
/**
 * @import express, mongoose, body-parser
*/

const express$ = require('express');
const dotenv$ = require("dotenv");
const body_parser$ = require('body-parser');
const path$ = require('path');
const cors$ = require('cors');

/**
 * @constant environment varibale configuration
 */

dotenv$.config();

const { router$ } = require('./routers/router.d');
const mongoose$ = require('./db/mongodb.config'); // MongoDB connection.


const _port = process.env.PORT || 8080;

const __app__ = express$();

__app__.use(body_parser$.json());
__app__.use(express$.json());
__app__.use(express$.urlencoded({
    extended: true
}));

__app__.use(cors$({
    origin: process.env.DEV_URL
}));

// Serve only the static files form the dist directory
__app__.use(express$.static('./dist/ehubzone'));
__app__.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ehubzone/'}),
);

__app__.listen(_port, async() => {
    console.log(`Server started at localhost:${_port}`);
});

__app__.use(router$)
