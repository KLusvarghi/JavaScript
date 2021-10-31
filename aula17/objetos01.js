let amigo = {nome: 'josé', 
sexo: 'M',  //Sendo o atributo "sexo" com valor "M"
peso: 85.4, 
engordar(p=0){   //sendo possivel colocar uma fuction dentro de um objeto
    console.log('Engordou')
    this.peso += p
}}

console.log(typeof amigo)

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}kg`) //para chamar o resultado se coloca o nome do objeto + identificador literal