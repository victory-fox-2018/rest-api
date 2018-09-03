
function isAdmin (req,res,next) {
    const user = req.decoded
    console.log(user)
    if (user.role==='admin') {
        next()
    } else {
        res.status(500).json({
            message: 'unauthorized'
        })
    }
}

module.exports = isAdmin