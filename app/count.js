exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
        var timeout;
        function myCounter(i){
            console.log(start++);
            if(start <= end){
                timeout = setTimeout(myCounter, 100);
            }
        }

        myCounter();

        return{
            cancel: function(){
                return clearTimeout(timeout)
            }
        }
  }
};
