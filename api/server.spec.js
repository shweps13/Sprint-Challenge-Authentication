const request = require('supertest');
const express = require('express');
const app = express();

const server = require('./server.js');


describe('GET /api/jokes', () => {
    
    // should return http 200 ok
    it('should return 200 http status code', () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);
        })
    })

    // should return text
    it('should return a text greeting', async () => {
        const response = await request(server).get('/');
        expect(response.type).toMatch(/[A-Za-z0-9]+/);
    });
})

describe('POST /login', function() {
    // login with wrong credentials
    it('responds with json', function(done) {
      request(server)
        .post('/api/auth/login')
        .send({username: "someuser", password: "somelogin"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    // login with without password
    it('responds with json', function(done) {
        request(server)
          .post('/api/auth/login')
          .send({username: "someuser"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });