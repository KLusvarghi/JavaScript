function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtAno') //Ano inserido no formulário
    var resul = document.querySelector('div#resul')
    if(formAno.value.length > 1921 || Number (formAno.value)> ano){ //não é necessario converter pq o propio javascript fez isso
        window.alert('[ERRO] Verifique os dados novamente!')
    }else{
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(formAno.value) //calculo da idade, ano atual "ano" menos o de nascimento "formAno.value"
        //resul.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img') //criando uma tag 'img' dinamicamente
        img.setAttribute('id', 'foto') //CRIANDO um id para a tag IMG
        if(fsex[0].checked){ //ele verificou o sexo, se ele é masculino, pq o "mascul" vem primeiro, e sem vem primeiro é posição [0]
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade > 9 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade > 20 && idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if(fsex[1].checked){//ele verificou o sexo, se ele é feminino, posição [1], pq é a segunda na sequencia no html
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade > 9 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade > 20 && idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        resul.style.textAlign = 'center' //centralizando o texto que esta na "DIV"
        resul.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resul.appendChild(img) // vai adicionar um elemento
    }
}