const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', userRoutes)

app.listen(3000, () => {
    console.log('server is running on port 3000')
})