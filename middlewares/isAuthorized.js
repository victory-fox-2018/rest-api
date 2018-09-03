var jwt = require('jsonwebtoken');

module.exports = {
    isAuthorized: (req, res, next) => {
        if (req.decoded.role === 'admin') {
            next()
        } else if (req.decoded.id === user.id) {
            next()
        } else {
            res.status(403).json({
                message: 'you are unauthorized'
            })
        }
    }
}