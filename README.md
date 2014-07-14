# forward-events

Forward events from a source emitter to a destination emitter.

## Methods

### forward(src, dest, callback)

- `src` - The source `Emitter`
- `dest` - The destination `Emitter`
- `callback` - *Optional* - A callback allowing the event to be modified. The callback is passed the event type, arguments and emitter. The callback should return an object with the keys `type` and `arguments`.