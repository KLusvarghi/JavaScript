let num = [55, 22, 9, 12, 33, 5, 7, 9]

num.push(27) // ele irá acrescentar um número que esteja dentro do parenteses 

console.log(`nosso vetor é o ${num}`)

console.log(`${num}`)// exibindo ele com crase, ele será exibido sem com colchetes
console.log(num) // exibindo ele sem crase, ele será exibido com colchetes

num.sort() // ele irá colocar o vetor em ordem crescente

num.push(27) // ele irá acrescentar um número que esteja dentro do parenteses mas não colocará ele em ordem crescente por ser colocodo após o "num.sort"


console.log(`O vetor em ordem crencente ficou: ${num}`)

console.log(`0 vetor tem ${num.length} posições`)

console.log(`o primeiro valor do vetor é ${num[0]}`)

for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('\t')

          // o "in" se le "dentro" ou "em" em portugues
for(let c in num){ //para cada posição em/dentro de "num" eu irei mostrar o num[c]
    console.log(`A posição ${c} tem o valor ${num[c]}`)
} //essa sintace do for só finciona para ARRAYS e OBJETOS

console.log('\t')

let pos = num.indexOf(8)

if(pos == -1){
    console.log('O valor 8 não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
    
}


let onde = num.indexOf(55)
if(onde == -1){
    console.log('O valor 55 não foi encontrado')
}else{
    console.log(`O valor 55 está na posição ${onde}`)   
}