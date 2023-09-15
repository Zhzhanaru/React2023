var once = function(fn) {
    let called = false
    
    return function(...args) {
        if (!called) {
            called = true
            return fn(...args)
        } else {
            return undefined
        }
    };
};


const function1 = (a, b, c) => a + b + c
const onceFunction1 = once(function1)

console.log(onceFunction1(1, 2, 3))
console.log(onceFunction1(2, 3, 6))

const dunction2 = (a, b, c) => a * b * c
const onceFunction2 = once(dunction2)

console.log(onceFunction2(5, 7, 4))
console.log(onceFunction2(2, 3, 6))
console.log(onceFunction2(4, 6, 8))