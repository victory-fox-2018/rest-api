const express = require('express')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', userRoutes)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})