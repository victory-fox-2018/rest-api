const bcrypt = require('bcryptjs');
function hash(pswrd) {
    let password = pswrd
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt); 
    return hash
}

module.exports = hash

