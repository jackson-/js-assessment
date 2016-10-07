exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
        promise = new Promise(
            function (resolve, reject) {
                if(value == 'success'){
                    resolve("success");
                } else if(value == true){
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        return promise
  },

  manipulateRemoteData: function(url) {
    var def = $.Deferred();

    $.get(url).then(function(rsp){
        var ppl = $.map(rsp.people, function(person){
            return person.name
        })
        def.resolve(ppl.sort())
    })

    return def.promise();
  }
};
