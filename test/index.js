var assert = require('assert');
var Emitter = require('component-emitter');

var forward;
try {
	forward = require('..')
} catch(e) {
	forward = require('forward-events');
}

describe('forward', function() {

  var
    a = new Emitter(),
    b = new Emitter()
  ;

  it('should forward events', function(done) {

    forward(a, b);

    b.on('test_event', function(arg1, arg2) {
      assert.equal('some_value', arg1);
      assert.equal(11, arg2);
      done();
    });

    a.emit('test_event', 'some_value', 11);
  });

  it('should modify events', function(done) {

    forward(a, b, function(type, arguments, src) {
      arguments.unshift(src);
      return {
        type:      'test:'+type,
        arguments:  arguments
      }
    });

    b.on('test:event', function(src, arg1, arg2) {
      assert.equal('some_value', arg1);
      assert.equal(11, arg2);
      done();
    });

    a.emit('event', 'some_value', 11);
  });

});