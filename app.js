const express = require('express')
const routes = require('./routes')


const app = express()
app.use(require('cors')())
const port = process.env.PORT || 4000;
require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',routes)
app.get('/',(req,res)=>{
    res.send('welcome to the jungle')
}) 

app.listen(port, () =>{ console.log(`running on port ${port}`)})