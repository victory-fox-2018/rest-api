require('dotenv').config()

const crypto = require('crypto');

const encrypt = (password) => {
  const hash = crypto.createHmac('sha256', process.env.PASSWORD_SECRET)
                   .update(password)
                   .digest('hex');
  return hash;
};

module.exports = encrypt;