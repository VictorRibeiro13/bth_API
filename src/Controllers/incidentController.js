const connection = require('../database/connection');

module.exports = {
    async store(request, response){
        const { title, description, value } = request.body;

        // O header carrega o contexto e dados de autenticação da req
        const ong_id = request.headers.authorization;

        //dentro do array que a conexão retornará, pegar o id do incident
        const [ id ] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id })
    },

    // list incidents with pagination
    async list(request, response){
    //se por padrão não vier a páginação ele atribuirá 1 
    const { page = 1  } = request.query; 

    // [count] == count[0] -> que retorna: { count(*): valor }
    const [count] = await connection('incidents').count();

    response.header('X-Total-Count', count['count(*)'])

    const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);
    return response.json(incidents);
    },


    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); // retornando o primeiro resultado que achar
        
        if(incident.ong_id != ong_id){
            // não autorizado
            return response.status(401).json({ erro: 'Operation not permitted.' }); 
        }

        await connection('incidents').where('id', id).del();
        return response.status(204).send();
    }
}