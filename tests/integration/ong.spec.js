const request = require('supertest');
const app = require('../../src/app')

describe('ong create', () => {
    it('should be able to create a new ONG', async () => { 
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "OngNOVA",
            email: "contatcom",
            whatsapp: "1112346789",
            city: "São Paulo",
            uf: "SP"
        });

        console.log(response.body)

    })
})