'use strict';

var superagent = require('superagent');
var expect = require('expect.js');

describe('calls to the count-schlumux API', function() {

  it('simulates creation of a new counter using Mocky', function(done) {
    superagent.post('http://www.mocky.io/v2/54725942db3204c00dfeda17')
      .send({
        id: 'example.com'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.id).to.eql('example.com');
        done();
      });
  });
});
