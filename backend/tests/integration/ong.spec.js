const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');
describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD3',
        email: 'contato@test.com',
        whatsapp: '4700000000',
        city: 'Ibiporã',
        uf: 'PR'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to login', async () => {
    const ongData = {
      name: 'APAD3',
      email: 'contato@test.com',
      whatsapp: '4700000000',
      city: 'Ibiporã',
      uf: 'PR'
    };

    const ongCreationRes = await request(app)
      .post('/ongs')
      .send(ongData);

    const response = await request(app)
      .post('/sessions')
      .send({
        id: ongCreationRes.body.id
      });

    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toEqual(ongData.name);
  });
});
