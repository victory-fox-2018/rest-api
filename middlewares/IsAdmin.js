'use strict'

const jwt = require('jsonwebtoken');

function IsAdmin(req,res,next) {

    if(req.decoded.role === 'admin'){
        next();
    }else if(req.decoded.role !=='admin'){
        res.status(401).json({msg: 'User doesn\'t have permission to create '});
    }
}

module.exports = IsAdmin