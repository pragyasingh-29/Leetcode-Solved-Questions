/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var newNum = init;
    return {
      increment: function (){
        newNum += 1;
        return newNum;
      },
        reset:function(){
       newNum = init;
       return newNum;
      },
      decrement:function(){
         newNum -= 1;
         return newNum;
      },
    }
    
};


  const counter = createCounter(5);
  console.log(counter);
   console.log(counter.increment()); // 6
   console.log(counter.reset()); // 5
   console.log(counter.decrement()); // 4
 