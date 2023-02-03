//Comentário em liha 
/*

Comentário em bloco

*/
console.log('testando o Node.JS');

//Import da biblioteca que permite entrada de dados via teclado
var readline = require('readline')

//Criamos um objeto ou variável que vai ser 
//especialista na entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//CallBack - Uma função de CallBack permite que na própria linha de programação
//seja uma variável, um processamento, a chamada de um método possa acontecer
//um retorno de dados automaticamente, sem precisar sair desse processamento.

//Cria uma interação com o usuário, para entrada de dados.
//Após o usuário digitar o conteúdo, o objeto entraDados permite
//retornar o conteúdo digitado para ser utilizado . 
//Isso acontece através de uma função CallBack.
entradaDados.question('Favor digitar seu nome: \n', function(nome){
    console.log('Bem-vindo, ' + nome + ' ao servidor Node.JS !')
});



