let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado encontrado na lista.')
    }
    num.value = ' ' // Após digita rum número ele irá apagar o numero digitado
    num.focus() // e após isso ele deixará o curso em foco após digitar um número
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let maiorN = valores[0]
        let menorN = valores[0]
        let somaN = 0
        let mediaN = 0
        for(let i in valores){
            if(valores[i] > maiorN){
                maiorN = valores[i]
            }
            if(valores[i] < menorN){
                menorN = valores[i]
            }
            somaN += valores[i]
        }
        mediaN = somaN/valores.length
        mediaN = Math.round(mediaN)

        res.innerHTML =''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorN}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorN}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somaN}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${mediaN}</p>`
    }
}