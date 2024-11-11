let numbers = [1, 2, 3, 4, 5];
function raddoppia(numbers){
    let risultato = numbers * 2;
    console.log(risultato + "");

}

numbers.forEach(raddoppia);

let squaredNumbers = numbers.map(squaredNumbers => {
    return squaredNumbers + Math.pow(squaredNumbers);
})

console.log(squaredNumbers);
    
    
