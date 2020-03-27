/**
 * a função up é a função de criação, são os comandos SQL que 
 * serão executados nesse migration
 */

exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); // Cada ong escolhe seu id
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
};

/**
 * 
 *  a função down é utilizada caso haja algum tipo de 
 * perda/problema e seja necessario voltar versões. Portanto
 * seriam instruções as instruções que desfaçam as atlterações 
 *  da função UP.
 * 
 * Portanto, para a criação de uma tabela (metodo up) o método down
 * deve ser a exclusão dessa tabela. 
 * 
 */

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
