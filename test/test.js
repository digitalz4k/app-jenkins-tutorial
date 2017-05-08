'use strict'

const server = require('../server')
const request = require('supertest')

describe('GET /', () => {
    it('respond with HTML', (done) => {
        request(server)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                done()
            })
    })
})