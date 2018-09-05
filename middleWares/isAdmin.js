const jwt = require('jsonwebtoken')
const User = require('../models').User

const isAdmin = (req,res,next) => {

    if(req.decoded.role == 'admin') {
        next()
    } else {
        res.status(403).json({
            message: "You're not authorized for these feature"
        })
    }
}

module.exports = isAdmin