var bcrypt = require('bcryptjs')

const passEncryptor = (password) => {
    
    var hash = bcrypt.hashSync(password, Number(process.env.HASH));
    return hash
}

module.exports = passEncryptor