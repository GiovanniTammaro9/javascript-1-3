function outerfunciotn(x, initialValue) {
    let result = initialValue;
    

    function innerfunction(y) {
        return y + result;
    }

    return innerfunction(4);
}

let risultato = outerfunciotn(5, 10);
console.log(risultato);

//persistenza delle variabili





