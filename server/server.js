require('dotenv').config()
const bodyParser = require('body-parser');
const massive = require('massive');
const express = require('express');
const controller = require('./controllers.js');
const app = express();


app.use(express.json())

const {

    PORT,
    CONNECTION_STRING

} = process.env

app.use(bodyParser.json())

massive( CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected')
}).catch(err => console.log(err));

const c = controller;

//Endpoints

// app.get('/api/login/:id', c.login);

app.post('/api/register', c.register);




app.listen(PORT, () => { console.log(`Welcome to my server ${PORT}!`);});