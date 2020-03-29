const crypto = require('crypto');

function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}

module.exports = generateUniqueId;

// module.exports = function() -> retorna o valor da funcion
// module.exports = function -> retorna a funcion