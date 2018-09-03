require('dotenv').config()

const crypto = require('crypto')

const hashPass = (password) => {
    
    const hash = crypto.createHmac('sha256', process.env.SecretKey)
                       .update(password)
                       .digest('hex')
    return hash
}

module.exports = hashPass