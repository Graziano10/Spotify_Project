const express = require("express");
const app = express();
const jwt = require('jsonwebtoken'); 
const registerRouter = require('./route/register'); // Importa il modulo delle rotte degli utenti
const loginRouter = require('./route/login');

// DATABASE
require('dotenv').config();
const db = require('./db/db.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// PAGE FRIST
app.get('/', ( _, res ) => {
    res.status(200).send('Good');
});

// REGISTER
app.use('/api/registerUser', registerRouter);

// LOGIN
app.use('/api/login', loginRouter);

app.listen(3000, () => {
    console.log('Server up and running on http://localhost:3000 ');
});