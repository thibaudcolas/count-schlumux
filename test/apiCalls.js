'use strict';

var request = require('supertest');
var expect = require('expect.js');

request = request('http://localhost:3000');

describe('calls to the count-schlumux API', function() {

  it('creates a new counter', function(done) {
    var id = '0';

    request
      .put(devURL + '/count/' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        expect(res.ok).to.be.ok();
        done();
      });
  });

  it('retrieves the value of an existing counter', function(done) {
    var id = '0';

    request
      .get(devURL + '/count/' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        expect(res.ok).to.be.ok();
        done();
      });
  });

  it('increments an existing counter', function(done) {
    var id = '0';

    request
      .post(devURL + '/count/' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        expect(res.ok).to.be.ok();
        done();
      });
  });

  it('deletes an existing counter', function(done) {
    var id = '0';

    request
      .del(devURL + '/count/' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        expect(res.ok).to.be.ok();
        done();
      });
  });
});
