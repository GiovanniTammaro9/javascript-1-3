function outerfunciotn(x, initialValue) {
    let result = initialValue;
    

    function innerfunction(y) {
        return y + result;
    }

    return innerfunction(4);
}

let risultato = outerfunciotn(5, 10);
console.log(risultato);

//counter

function createCounter() {
    let count = 0;
    return {
        increment : function() {
            count += 1;
            return count;
        },

        decrement : function() {
            count -= 1;
            return count;
        }
    }
}







