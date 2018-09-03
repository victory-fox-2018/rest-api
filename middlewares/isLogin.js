const userModel = require('../models').User
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.headers.token
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            next(err.message)
        } else {
            userModel.findOne({where: {name: decoded.name, email: decoded.email, password: decoded.password}})
            .then(user => {
                if (user && (decoded.role === 'admin' || decoded.id == req.params.id)) {
                    next()
                } else if (user && decoded.role === 'user') {
                    res.status(500).json({message: 'Access denied'})
                } else {
                    res.status(500).json({message: 'You are unregistered'})
                }
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
        }
    })
}