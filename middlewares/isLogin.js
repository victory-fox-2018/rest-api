const { User } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.headers.token
    if(token){
        jwt.verify(token, 'secret', (err, decoded) => {
            if(err){
                res.status(500).json({
                    message: err.message
                })
            }else{
                User
                    .findOne({
                        where:{
                            id: decoded.id
                        }
                    })
                    .then(user => {
                        if(user){
                            req.decoded = decoded
                            next()
                        }else{
                            res.status(500).json({
                                message: `Token unknown`
                            })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: err.message
                        })
                    })
            }
        })
    }else{
        res.status(404).json({
            message: `You don't have access to this`
        })
    }
}