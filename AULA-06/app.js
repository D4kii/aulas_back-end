/*******************************************************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: Daniela
 * Versão: 1.0 
 *******************************************************************************************************/
// [ ] - representa um objeto do tipo ARRAY
// { } - represeta um objeto do tipo JSON

const { normalize } = require("path");
const { ALL } = require("dns");

const listaNomes = ['José', 'Maria', 'Luiz', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'HD', 'Memória'];

/********************************************
 * JSON é composto: chave(atributo) e valor
 * 
 * Chave    Valor   Chave        Valor     Chave        Valor
 * {nome : 'José', calular : '1195554455', email : 'jose@gmail.com'}
 ********************************************/

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

const novoReturn = function (listaNova, produto) {
    const novoArray = listaNova.slice();
    let nomeProduto = produto;
    let indice = novoArray.indexOf(nomeProduto);
    let status;

    if (indice >= 0) {
        novoArray.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }
    if (status) {
        return novoArray
    } else {
        return false
    }
}

const listagemProdutos = function () {
    //Forma n°1 de criar um JSON e já atribuir chaves e valores
    // let listProdutosJSON = { produtos: listaProdutos, clientes : listaNomes };


    //Forma n°2 de criar um JSON, onde as chaves e valores são atribuidas o decorrer do projeto
    // let listProdutosJSON = {};

    // listProdutosJSON.produtos = listaProdutos;
    // listProdutosJSON.clientes = listaNomes;

    // //Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON);
    // console.log(listProdutosJSON.produtos[1]);
    // console.log(listProdutosJSON.clientes[5]);

    let listProdutosJSON = {}
    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'DELL',
            valor: 1000,
            codigo: 1
        },
        {
            nome: 'Monitor',
            quantidade: 280,
            marca: 'LG',
            valor: 1300,
            codigo: 2
        },
        {
            nome: 'Teclado',
            quantidade: 800,
            marca: 'DELL',
            valor: 200,
            codigo: 3
        },
        {
            nome: 'Teclado',
            quantidade: 360,
            marca: 'LG',
            valor: 230,
            codigo: 4
        },
        {
            nome: 'Teclado',
            quantidade: 80,
            marca: 'Logitech',
            valor: 120,
            codigo: 5
        },
        {
            nome: 'Teclado',
            quantidade: 100,
            marca: 'Razer',
            valor: 1230,
            codigo: 6
        },
        {
            nome: 'Mouse',
            quantidade: 790,
            marca: 'DELL',
            valor: 115,
            codigo: 7
        },
        {
            nome: 'Mouse',
            quantidade: 25,
            marca: 'Razer',
            valor: 800,
            codigo: 8
        },

    ];
    //Arrays para cores
    let listCoresDelArray = ['Preto', 'Branco', 'Cinza'];
    let listCoresLgArray = ['Preto', 'Cinza'];
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul'];
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K'];
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico'];


    //Adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray; //adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos[0].cores = listCoresDelArray; //Adicionar cores ao monitor Dell
    listProdutosJSON.produtos[1].cores = listCoresLgArray; //Adicionar cores ao monitor LG
    listProdutosJSON.produtos[2].cores = listCoresDelArray; //Adicionar cores ao teclado Dell
    listProdutosJSON.produtos[3].cores = listCoresLgArray; //Adicionar cores ao teclado LG
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray; //Adicionar cores ao Teclado logitech
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray; //Adicionar cores ao Teclado razer
    listProdutosJSON.produtos[6].cores = listCoresDelArray; //Adicionar cores ao mouse Dell
    listProdutosJSON.produtos[7].cores = listCoresMouseArray; //Adicionar cores ao mouse Razer

    //Adicionar modelos aos Monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor;
    listProdutosJSON.produtos[1].modelos = listModelosMonitor;

    //Adicionar modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado;
    listProdutosJSON.produtos[3].modelos = listModelosTeclado;
    listProdutosJSON.produtos[4].modelos = listModelosTeclado;
    listProdutosJSON.produtos[5].modelos = listModelosTeclado;


    // console.log('Nome: ' + listProdutosJSON.produtos[1].nome);
    // console.log('Marca: ' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor: ' + listProdutosJSON.produtos[1].valor);
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores[1]);
    // console.log('Modelo: ' + listProdutosJSON.produtos[1].modelos[1]);

    const produtos = listProdutosJSON.produtos.length;
    const tamanhoCores = listProdutosJSON.produtos


    //Percorre o Array de produtos
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('\nNome: ' + itemProduto.nome);
        console.log('Marca: ' + itemProduto.marca);

        if (itemProduto.cores != undefined) {
            //Percorre o Array de cores que está dentro do Array de produtos(item)
            itemProduto.cores.forEach(function (itemCor) {
                console.log('***Cor: ' + itemCor)
            })
        }
        if (itemProduto.modelos != undefined) {
            //Percorre o Array de modelos que está dentro do Array de produtos
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelo: ' + itemModelo)
            })

        }
    })
    // for (let cont = 0; cont < produtos; cont++) {
    //     console.log('**************************************************\n')
    //     console.log('Nome: ' + listProdutosJSON.produtos[cont].nome);
    //     console.log('Marca: ' + listProdutosJSON.produtos[cont].marca);
    //     console.log('Valor: ' + listProdutosJSON.produtos[cont].valor);

    //     // for (let contCores = 0 ; contCores <= cont; contCores++) {

    //     //     console.log('Cor: ' + listProdutosJSON.produtos[cont].cores[contCores]);

    //     // }

    // }

}
listagemProdutos()
// console.log(novoReturn(listaProdutos, 'monito'));
// console.table(listaProdutos);
// manipulandoDados();
