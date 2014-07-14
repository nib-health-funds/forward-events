/**
 * Forward events from the source emitter to the destination emitter
 * @param   {Emitter}                             src
 * @param   {Emitter}                             dest
 * @param   {Function(String, Array, Emitter)}    [callback]
 */
function forward(src, dest, callback) {

  var emit = src.emit;
  src.emit = function(type) {

    //emit the type on the src
    emit.apply(src, arguments);

    //extract the type
    var args = Array.prototype.slice.call(arguments, 0);
    var type = args.shift();

    //let the dat abe modified
    if (callback) {
      var r = callback(type, args, src);
      type = r.type;
      args = r.arguments;
    }

    //replace the type
    args.unshift(type);

    //emit the type on the dest emitter
    return dest.emit.apply(dest, args);
  };

}

module.exports = forward;