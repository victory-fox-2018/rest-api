const bcrypt = require('bcryptjs');

function hashPassword(password){
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    return hash
}
module.exports = hashPassword