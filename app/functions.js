exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
        return fn.apply(null, arr)
  },

  speak: function(fn, obj) {
        return fn.call(obj)
  },

  functionFunction: function(str) {
        return function(str2){
            return str + ", " + str2
        }
  },

  makeClosures: function(arr, fn) {
        var ret = [];

        var makeFn = function(val) {
          return function() { return fn(val); };
        };

        for (var i = 0, len = arr.length; i < len; i++) {
          ret.push(makeFn(arr[i]));
        }
        return ret;
  },

  partial: function(fn, str1, str2) {
        return function returnSaying(sentence){
            var sentence = fn(str1, str2, "!!!")
            return sentence
        }
  },

  useArguments: function() {
        var sum;

        for (var i = 0, len = arguments.length; i < len; i++) {
          sum += arguments[i];
        }

        return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
