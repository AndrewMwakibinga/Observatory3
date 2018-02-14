'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/user', function() {

  it('should respond with JSON array for users', function(done) {
    request(app)
    .get('/api/users/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });

  it('should respond with JSON array for users', function(done) {
    request(app)
    .get('/api/users/past')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });
});
