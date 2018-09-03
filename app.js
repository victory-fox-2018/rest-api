const cors = require('cors')
const express = require('express')
const app = require('express')()
const router = require('./routes/indexRoute')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.use('/', router)
app.listen(port, () => {
    console.log(`Running in ${port}`)
})