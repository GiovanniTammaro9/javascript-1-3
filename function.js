function outerfunciotn(x) {
    

    function innerfunction(y) {
        return x + y;
    }

    return innerfunction(4);
}

let risultato = outerfunciotn(5);
console.log(risultato);



