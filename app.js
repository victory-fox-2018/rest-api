var express = require('express');
var app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();


const home = require('./routes');
const users = require('./routes/users');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.listen(port,()=>{
console.log(`application is on port:${port}`);
});

app.use('/api',home);
app.use('/api/users',users);