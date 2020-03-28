const { randomBytes } = require('crypto');

module.exports = function generateUniqueId() {
  return randomBytes(4).toString('hex');
};
