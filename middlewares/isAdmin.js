const userModel = require('../models').User
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.headers.token
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            next(err.message)
        } else {
            if (decoded.role === 'admin') {
                next()
            } else {
                res.status(500).json({message: 'Access denied'})
            }
        }
    })
}