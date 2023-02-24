/*******************************************************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: Daniela
 * Versão: 1.0 
 *******************************************************************************************************/
// [ ] - representa um objeto do tipo ARRAY
// { } - represeta um objeto do tipo JSON

const { normalize } = require("path");

const listaNomes = ['José', 'Maria', 'Luiz', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'HD', 'Memória'];

const exibindoDados = function () {


    //Verifica o tipo de dados do elemtento listaNomes
    console.log(typeof (listaNomes))

    //table - permite vizualizar o conteúdo do ARRAY em formato de tabela
    console.table(listaNomes)

    console.log(listaNomes.length)

    //percorrendo array com WHILE
    console.log('Exemplo com WHILE')
    let cont = 0;
    let qtdeItens = listaNomes.length //stop

    while (cont < qtdeItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)
        cont += 1
    }

    //percorrendo array com FOR
    console.log('Exemplo com FOR')
    for (let cont = 0; cont < qtdeItens; cont++)
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)

    //Percorrendo um array com FOREACH
    console.log(`Exemplo com FOREACH`);
    for (item in listaNomes) {
        console.log(`Onome do aluno: ${listaNomes[item]}`)
    }

    //Percorrendo um array com FOREACH
    console.log(`Exemplo com FOREACH`);
    listaNomes.forEach(function (nome) {
        console.log(`Onome do aluno: ${nome}`)
    })
};

const manipulandoDados = function () {
    //push - Adiciona novos itens no final do Array, preservando os elementos anteriores
    listaProdutos.push('Memória');
    listaProdutos.push('WebCam', 'Gabinete');

    //unshift - Adiciona novos itens no final do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'SSD', 'Placa-Mãe')
    console.table(listaProdutos);

    //pop - Remove o último item do Array, preservando os elementos anteriores
    listaProdutos.pop();
    console.table(listaProdutos);

    //shift - Remove o item do início do Array, reorganizando todos os elementos
    listaProdutos.shift();
    console.table(listaProdutos);

    //Slice - Permite criar uma cópia de um Array
    const novosProdutos = listaProdutos.slice();
    console.log(novosProdutos);

    //IndexOf - Permite buscar dentro de um Array um Item
    // Se um retorno for -1, o item não foi encontrado
    //Se o retorno for igual ou maior a 0, o item foi encontrado e ele retorna o índice
    console.log(listaProdutos.indexOf('SSD'));

    //Exemplo de utilização do indexOf
    if (listaProdutos.indexOf('Placa-Mãe') >= 0) {
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado')
    }


};

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    //splice - Permite apagar um ou mais itens de um ARRAY através dp índice
    //Se for encaminhado somente o índice ele irá apagar todos os itens para baixo
    //Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true;
    } else {
        status = false;
    }
    return status;
}

const novoReturn = function(listaNova, produto){
    const novoArray = listaNova.slice();
    let nomeProduto = produto;
    let indice = novoArray.indexOf(nomeProduto);
    let status;

    if(indice >= 0){
        novoArray.splice(indice, 1);
        status = novoArray;
    } else{
        status = false;
    }
    if(status){
        return novoArray
    }else{
        return false
    }
}
console.log(novoReturn(listaProdutos, 'monito'));
// console.table(listaProdutos);
// manipulandoDados();