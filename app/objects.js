exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
        return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
        constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
        var obj_arr = $.map(obj, function(v, k){

                if(obj.hasOwnProperty(k)){
                    return k + ': ' + v;
                }
        })
        return obj_arr;
  }
};
