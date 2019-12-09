// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //check whats passed in (string? object? function?)
  //
  if (typeof(obj) === 'string') {

    return '"' + obj + '"';
  } if (typeof(obj) === 'number') {
    return obj.toString();
  } if (typeof(obj) === 'boolean') {
    return obj.toString();
  } if (obj === null) {
    return 'null';
  } if (typeof obj === undefined) {
    return undefined;
  } if (Array.isArray(obj)) {
    var result = '';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    return '[' + result.slice(0, result.length - 1) + ']';
  } if (Object.prototype.toString.call(obj).split(' ')[1] === 'Object]') {
    var objResult = '';
    for (var keys in obj) {
      if (stringifyJSON(obj[keys])) {
        objResult += stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]) + ',';
      }
    }
    return '{' + objResult.slice(0, objResult.length - 1) + '}';
  }



};
