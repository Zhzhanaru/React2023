/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var CurrentVal = init;

    return{
        increment:function(){
            CurrentVal++;
            return CurrentVal;
        },
        decrement:function(){
            CurrentVal--;
            return CurrentVal;
        },
        reset: function(){
            CurrentVal=init;
            return CurrentVal;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */