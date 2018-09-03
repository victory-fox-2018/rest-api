'use strict'

function IsAuthorized(req,res,next) {
    // console.log('TEST Decoded',req.decoded.id,' ----  ',req.params.id)
    // console.log('TYPE of',typeof req.decoded.id,'----',typeof req.params.id)
    let idCheck = parseInt(req.params.id);

    if(req.decoded.id === idCheck || req.decoded.role === 'admin'){
        next()
    }else if(req.decoded.id !== req.params.id && req.decoded.role !== 'admin'){
        res.status(401).json({msg : 'User doesn\'t have permission to view data '})
    }    
}

module.exports = IsAuthorized