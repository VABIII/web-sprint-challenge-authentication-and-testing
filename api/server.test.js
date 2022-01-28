const db = require('../data/dbConfig');

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
