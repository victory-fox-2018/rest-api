'use strict'

const crypto =require('crypto');

function HashPassword(str) {
    
    const secret = process.env.SECRET

    const hash = crypto.createHmac('sha256',secret)
                    .update(str)
                    .digest('hex')
                    
    return hash;
}

module.exports = HashPassword