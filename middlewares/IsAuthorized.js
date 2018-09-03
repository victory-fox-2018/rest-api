'use strict'

function IsAuthorized(req,res,next) {

    let idCheck = parseInt(req.params.id);
    // console.log('TEST Decoded',req.decoded.id,' ----  ',idCheck)
    // console.log('TYPE of',typeof req.decoded.id,'----',typeof idCheck)

    if(req.decoded.id === idCheck || req.decoded.role === 'admin'){
        next()
    }else if(req.decoded.id !== req.params.id && req.decoded.role !== 'admin'){
        res.status(401).json({msg : 'User doesn\'t have permission '})
    }    
}

module.exports = IsAuthorized