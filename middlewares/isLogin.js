require('dotenv').config()

const {User} = require('../models'),
      jwt = require('jsonwebtoken');

module.exports = {
    isLogin: (req, res, next) => {
        const token = req.headers.token

        jwt.verify(token, process.env.Secret , function(err, decoded) {
            if (err) res.status(403).json({
                message: 'you have not logged in'
            })
            else {
                req.decoded = decoded
                User.findOne({
                    where : {
                        username: req.decoded.username,
                        role: req.decoded.role
                    }
                })
                .then(user => {
                    next()
                })
                .catch (e => {
                    res.status(401).json({
                        message: e.message
                    })
                })
            }
        });
    }
}