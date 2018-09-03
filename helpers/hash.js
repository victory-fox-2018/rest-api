const crypto = require('crypto')

module.exports = {
  hashPassword: (password ,secret) => {
    const hashed = crypto.createHmac('sha256', secret)
    .update(password)
    .digest('hex');
    
    return hashed
  }
}