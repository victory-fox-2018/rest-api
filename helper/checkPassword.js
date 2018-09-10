function checkPassword(pass,email){
    const crypto = require('crypto');

    const secret = email;
    const hash = crypto.createHmac('sha256', secret)
                    .update(pass)
                    .digest('hex');

    return hash
}

module.exports = checkPassword