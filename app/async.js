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
    promise = new Promise(
            function (resolve, reject) {
                $.get(url).then(function(rsp){
                    var ppl = $.map(rsp.people, function(person){
                        return person.name
                    })
                    resolve(ppl.sort())
                })
            });
    return promise
  }
};
