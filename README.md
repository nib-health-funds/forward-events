# forward-events

Forward events from a source emitter to a destination emitter.

## Installation

ComponentJS:

    $ component install nib-health-funds/forward-events
    
NodeJS
   
    $ npm install --save nib-forward-events

## Usage
    
    var
        forward = require('forward-events'),
        a = new Emitter(),
        b = new Emitter()
    ;
    
    //forward the event to another emitter
    forward(a, b);
    
    //modify the event and forward the event to another emitter
    forward(a, b, function(type, args, src) {
      return {
        type:      'test:'+type, //prefix the event name
        arguments:  args
      }
    });

## Methods

### forward(src, dest, callback)

- `src` - The source `Emitter`
- `dest` - The destination `Emitter`
- `callback` - *Optional* - A callback allowing the event to be modified. The callback is passed the event type, arguments and emitter. The callback should return an object with the keys `type` and `arguments`.