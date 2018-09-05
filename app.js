require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const bodyparser = require('body-parser')
const bcrypt = require('bcryptjs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',routes)

app.listen(port,() => {
    console.log(`i'm listening to port 3000`);
})