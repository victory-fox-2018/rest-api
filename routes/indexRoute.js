const router = require('express').Router()
const user = require('./userRoute')
const { signup, signin } = require('../controllers/userController')

router.post('/api/signup', signup)
router.post('/api/signin', signin)

router.use('/api/users', user)

router.get('/', (req, res, next) => {
    res.status(200).json("REST API ASRUL H")
})

module.exports = router