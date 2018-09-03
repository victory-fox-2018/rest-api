const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {

    bcencode: (password, saltValue = 10) => {
        var salt = bcrypt.genSaltSync(saltValue)
        var hash = bcrypt.hashSync(password, salt)
        return hash
    },

    bcdecode: (passwordCheck, passwordDb) => {
        var check = bcrypt.compareSync(passwordCheck, passwordDb)
        return check
    }, 

    jwtencode: (obj) => {
        var token = jwt.sign(obj, process.env.SECRET_KEY || 'asrul-harahap');
        return token
    },

    jwtdecode: (token) => {
        let decode = jwt.verify(token, process.env.SECRET_KEY || 'asrul-harahap')
        return decode
    }  
}