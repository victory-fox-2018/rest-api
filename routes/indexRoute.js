const router = require('express').Router()
const user = require('./userRoute')

router.use('/api/users', user)

router.get('/', (req, res, next) => {
    res.status(200).json("REST API ASRUL H")
})

module.exports = router