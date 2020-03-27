const crypto = require('crypto'); // pacote de criptografia que vem junto como node
const connection = require('../database/connection');

module.exports = {
    async store(request, response) {
        const {
          name, email, whatsapp, city, uf,
        } = request.body;
      
        // CRIAÇÃO DE UMA STRING ALEATÓRIA PARA O ID
        const id = crypto.randomBytes(4).toString('HEX');
      
        await connection('ongs').insert({
          id, name, email, whatsapp, city, uf,
        });
      
        return response.json({ id });
      },

      async list(request,response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
}