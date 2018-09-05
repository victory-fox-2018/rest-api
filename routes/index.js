const routes = require('express').Router()
const user = require('./user')

routes.use('/api',user)

routes.get('/',(req,res)=> {
    res.status(200).json({
        message: {
            task : "Rest-API-1"
        }
    })
})

module.exports = routes