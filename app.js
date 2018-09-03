require('dotenv').config()
const express = require('express')
const apiRouter = require('./routes/api');
const app     = express()

const port    = process.env.POST || 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api', apiRouter)

app.get('/', (req,res) => {
    // res.send('Halaman Beranda')
})

app.listen(port, () => {
    console.log('Listening on port ', port)
})