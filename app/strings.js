exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
        var new_str = ""
        var count = {}
        for(i=0; str.length; i++){
            if(count.hasOwnProperty(str[i])){
                count[str[i]] = 1
                new_str += str[i]
            } else{
                count[str[i]] += 1
                if(count[str[i]] <= amount){
                    new_str += str[i]
                }
            }
        }
        return new_str
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
