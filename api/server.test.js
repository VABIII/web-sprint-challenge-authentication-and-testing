const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');
const Users = require('../api/auth/auth-model');


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

beforeEach(async () => {
  await db.seed.run()
})

beforeEach(async () => {
  await db('users').truncate()
})

afterAll(async () => {
  await db.destroy()
})


test('NODE_ENV is correct', () => {
  expect(process.env.NODE_ENV).toBe('testing')

})

test('sanity', () => {
  expect(true).toBe(true)
})
























