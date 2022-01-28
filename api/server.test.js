const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

const user1 = {
  name: 'Vern',
  password: '1234'
}
const user2 = {
  name: 'Trey',
  password: '1234'
}
const user3 = {
  name: 'Alfred',
  password: '1234'
}



beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
});

// beforeEach(async () => {
//   await db.seed.run()
// })

afterAll(async () => {
  await db.destroy()
})

describe('POST /register', () => {
  test('returns status 200 OK', async () => {
    const res = await request(server)
        .post("/register")
        .send(user1)
    expect(res.status).toBe(200)

  })

})


test('sanity', () => {
  expect(true).toBe(true)
})

























