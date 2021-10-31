function tabuada(){
    let num = document.getElementById('txtNum') //LET apenas funcionará dentro desta fuction, a variavel fora dela não irá valer
    let tabuSelect = document.getElementById('tabuada')
    // let resultado = document.querySelector('div#resul') não é necessario pq não vamos exibir na div, e sim no select
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)     
        // let c = 1
        // while(c <= 10){
        //     let item = document.createElement('option') 
        //     item.text = `${n}x${i}=${n*i}`
        //     tabuSelect.appendChild(item)
        //     c++
        // }
        tabuSelect.innerHTML = ' '
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option') // inves de criar no HTML ele está criando a option direto no script
            item.text = `${n}x${i}=${n*i}` //"text" é a parte de dentro do option
            tabuSelect.appendChild(item) //appendChild seria acrencentar um elemneto filho
                                         // mas só com o "item.next" ele não irá exibir, tem que colocar a variavel que tem o "select" junto com o .appendChild(valriavel que contem a escrita que será exbibida)
            
            item.value = `tab${i}` //
        }   
    }
        
}