const Model = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication = function (req, res, next) {
    let token = req.headers.token
    if (token) {
        let decode = jwt.verify(token, process.env.JWT_KEY)
        Model.User.findOne({ where: { username: decode.username } })
            .then(function (dataUser) {
                if (dataUser) {
                    req.user = dataUser.dataValues
                    next()
                } else {
                    res.status(400).json({ message: "user not found" })
                }
            })
            .catch(function (err) {
                res.status(400).json({ message: "login failed", error: err.message })
            })
    } else {
        res.status(400).json({
            message: "user must be login"
        })
    }
}

module.exports = authentication