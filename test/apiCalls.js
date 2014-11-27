'use strict';

var request = require('superagent');
var expect = require('expect.js');

var devURL = 'http://localhost:3000';

describe('calls to the count-schlumux API', function() {

  it('simulates creation of a new counter using Mocky', function(done) {
    request
      .post('http://www.mocky.io/v2/54725942db3204c00dfeda17')
      .send({
        id: 'example.com'
      })
      .end(function(err, res) {
        expect(err).to.be(null);
        expect(res.body.id).to.eql('example.com');
        done();
      });
  });

  it('creates a new counter', function(done) {
    request
      .put(devURL + '/count/')
      .send({
        name: 'example.com',
        description: 'Example counter',
        value: 0
      })
      .end(function(err, res) {
        expect(err).to.be(null);
        done();
      });
  });

  it('retrieves the value of an existing counter', function(done) {
    var id = '0';

    request
      .get(devURL + '/count/' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        done();
      });
  });

  it('increments an existing counter', function(done) {
    var id = '0';

    request
      .post(devURL + '/count/' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        done();
      });
  });

  it('deletes an existing counter', function(done) {
    var id = '0';

    request
      .del(devURL + '/count' + id)
      .end(function(err, res) {
        expect(err).to.be(null);
        done();
      });
  });
});
