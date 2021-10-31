function soma(n1, n2){
    return n1+n2
}

console.log(soma(4, 5)) 
console.log(soma(4)) // caso não declare o outro valor, o "n2" recebe "indefinido" tendo um retorno NaN = not a number
                    // porque 4 + indefinido é = NaN


function soma1(num1 = 0, num2 = 0){ //então para resolver isso fazemos PARÂMETROS pré definido
    return num1+num2
}

console.log(soma1(4)) 
