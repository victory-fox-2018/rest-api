const jwt = require('jsonwebtoken')

const isAdmin = (req, res, next) => {
    let token = req.headers.token

    if (token) {
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded) {
            if (decoded.role == 'admin') {
                next()
            } else {
                res.status(403).json({
                    msg: 'you are not allowed to do this action'
                })
            }
        }
    } else {
        res.status(400).json({
            msg: `you need to login 1st as admin`
        })
    }
}

module.exports = isAdmin