const express = require('express');
const path = require('path');
const bodyParser = require('body-parser') ;
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const database = require('./configs/database');
const mongojs = require('mongojs');

const books = require('./routes/books');


const app = express();

mongoose.connect(database.database);
mongoose.connection.on('connected', ()=>{
    console.log('connected to db '+database.database)
})

const port = 3000;

app.listen(port, () => {
    console.log('Running on port '+ port);
});

app.use(bodyParser.json());


app.use('/books', books);

//static folder 
app.use('/',express.static(path.join(__dirname,'/build')));



module.exports = app;