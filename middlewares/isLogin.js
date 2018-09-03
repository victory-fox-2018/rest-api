const { User } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.headers.token
    if (token){
        let decoded = jwt.verify(token, 'secret')
        User
            .findOne({
                where:{
                    id: decoded.id
                }
            })
            .then(user => {
                if (user){
                    req.decoded = decoded
                    next()
                }else {
                    res.status(401).json({
                        message: 'you are not authorize'
                    })
                }
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    }
}