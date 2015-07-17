var should = require('chai').should(),
    request = require('supertest');

  describe('Routing', function() {
  var url = 'http://localhost:3000';
  describe('get', function() {
    it('ping us back', function(done) {
      request(url)
    	.get('/')
      .expect(200)
      .expect(function(res){
        return res.body === "ping!";
      })
    	.end(function(err, res) {
        if (err) {
          return done(err);
        }
        done()
      });
    });
  });
});
