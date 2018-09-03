function isLoginUser (req,res,next) {
    if (req.decoded.id==req.params.id || req.decoded.role==='admin'){
        next()
    } else {
        res.status(401).json({
            message : 'unauthorized'
        })
    }
}

module.exports = isLoginUser