// IcedCoffeeScript (JS) wrapper for SocketStream 0.3

var fs = require('fs'),
    iced = require('iced-coffee-script');

exports.init = function(root, config) {

  return {

    name: 'IcedCoffeeScript',

    extensions: ['iced'],

    assetType: 'js',

    contentType: 'text/javascript; charset=utf-8',

    compile: function(path, options, cb) {
      var input = fs.readFileSync(path, 'utf8');
      try {
        cb( iced.compile(input, {bare: true}) );
      } catch (e) {
        var message = "! Error compiling " + path + " into IcedCoffeeScript";
        console.log(String.prototype.hasOwnProperty('red') && message.red || message);
        cb("Error compiling to IcedCoffeeScript: " + e.stack);
        throw new Error(e);
      }
    }
  };
};
