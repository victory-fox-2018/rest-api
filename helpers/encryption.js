class Encryption {

    static passwordGenerator(password) {
        const crypto = require('crypto');
        const hash = crypto.createHmac('sha256', process.env.ENCRYPTION_KEY).update(password).digest('hex');
        return hash;
    }
}

module.exports = Encryption