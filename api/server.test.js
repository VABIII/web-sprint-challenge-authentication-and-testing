const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');
const User = require('../api/auth/auth-model');

const user1 = {
  username: 'Vern',
  password: '1234'
}
const user2 = {
  username: 'Trey',
  password: '1234'
}
const user3 = {
  username: 'Alfred',
  password: '1234'
}



beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
});

// beforeEach(async () => {
//   await db.seed.run()
// })

beforeEach(async () => {
  await db('users').truncate()
})

afterAll(async () => {
  await db.destroy()
})

describe('POST /register', () => {
  test('returns status 200 OK', async () => {
    const res = await request(server)
        .post('/register')
        .send(user1)
    expect(res.status).toBe(200)
  })
})

describe('POST /register', () => {
  test('returns username', async () => {
    const res = await  request(server)
        .post('/register')
        .send(user2)
    expect(res.body).toBeTruthy()

  })
})

test('sanity', () => {
  expect(true).toBe(true)
})

























