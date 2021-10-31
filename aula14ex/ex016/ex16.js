function contar(){
    let ini = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let pas = document.querySelector('input#txtpasso')
    let resul = document.querySelector('div#resul')

    //prestar atenção que se encreve "length" = comprimento
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){ // ou converteria as variaveis para NUMBER antes ou coloco "NULL" para identificar a falta de uma entrada de dados no programa, porem não aceirtaria nem o "0"
        resul.innerHTML = 'Impossivel contar.'
        window.alert('[ERRO] Faltam dados!')
    }else{
        resul.innerHTML = 'Contando:'
        let i = Number(ini.value) //mesmo que ele seja um input de NUMBER é preciso converter para number mesmo assim
        let f = Number(fim.value)
        let p = Number(pas.value)   
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1;
        }
            if(i < f){
                //contagem crescente
                for(let cont = i; cont <= f; cont += p){
                    resul.innerHTML += `${cont} \u{1F449}` //U + 1F449 este seria o codigo do emoji, mas no javaScript se coloca deste jeito, se tira o U+ e coloca \u{condigo}
                }
            }else {
                //contagem decrescente
                for(let cont = i; cont >= f; cont -=p){
                    resul.innerHTML +=`${cont} \u{1F449}`
                }
            }
            resul.innerHTML += `\u{1F3C1}`        
    }   
}