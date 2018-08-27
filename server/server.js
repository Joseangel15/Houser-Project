require('dotenv').config()
const bodyParser = require('body-parser');
const massive = require('massive');
const express = require('express');
const controller = require('./controllers.js');
const session = require('express-session');
const app = express();


//Middleware
const checkForSession = require('./middlewares/checkForSession');


const {

    SERVER_PORT,
    CONNECTION_STRING

} = process.env

app.use(bodyParser.json())

app.use( session({
    secret: 'laskdjfaksjdhfaksjdhfaksdjhfak',
    resave: false,
    saveUninitialized: true,
    expires: 6000000
}))

app.use( checkForSession );

app.use( express.static( `${__dirname}/build`))


massive( CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected')
}).catch(err => console.log(err));

const c = controller;

//Endpoints

app.post('/api/login', c.login);

app.post('/api/reg', c.register);

//Destroy session

app.post('/api/auth/logout', c.logout)

//Create Property

app.post('/api/properties', c.saveProperties)




app.listen(SERVER_PORT, () => { console.log(`Welcome to my server ${SERVER_PORT}!`);});