const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)

test('there are 3 blogs', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(3)
}, 100000)

test('unique identifier property is called id', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].id).toBeDefined()
}, 100000)

afterAll(() => {
  mongoose.connection.close()
})
