function carregar (){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#imagem')
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manhaimg.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'noiteimg.png'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = 'noiteimg.png'
        document.body.style.background = '#515154'
    }
}