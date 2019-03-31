module.exports = (req, res, next) => {
    if(req.decoded.role == 'admin'){
        next()
    }else {
        res.status(403).json({
            message: 'you are not admin'
        })
    }
}