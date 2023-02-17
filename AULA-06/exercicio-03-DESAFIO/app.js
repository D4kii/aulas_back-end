//Import da biblioteca da caculadora
var parImpar = require('./modulo/parImpar.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Insira o primeiro número:\n', function (valor01) {
    let numeroInicial = valor01;

    entradaDados.question('Insira o último número:\n', function (valor02) {
        let numeroFinal = valor02;

        entradaDados.question('Números PARES, IMPARES ou AMBOS?\n', function (escolha) {
            let decisao = escolha.toUpperCase();

            //validação de entrada vazia
            if (numeroInicial == '' || numeroFinal == '' || decisao == '') {
                console.log('ERRO: Alguma lacuna não foi preenchida. Por favor, tente novamente.');
                entradaDados.close();
            } //Validação para entrada não-numérica 
            else if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
                console.log('ERRO: Por favor, digite somente números nas duas primeiras lacunas.');
                entradaDados.close();
            }//Validação para entrada numérica não apropriada
            else if (!isNaN(decisao)) {
                console.log('ERRO: Por favor, digite somente palavras na terceira lacuna.');
                entradaDados.close();
            }//Validação para entrada invalida na lacuna decisão
            else if (decisao != 'AMBOS' && decisao != 'PARES' && decisao != 'IMPAR') {
                console.log('ERRO: Por favor, digite na terceira lacuna somente as opções mostradas na legenda.');
                entradaDados.close();
            } //Validação para limitação da entrada inicial de 0 a 500
            else if (numeroInicial < 0 || numeroInicial > 500) {
                console.log('ERRO: Digite somente números de 0 a 500 na primeira lacuna, por favor.')
                entradaDados.close();
            }//Validação para limitação da entrada final de 100 a 1000
            else if (numeroFinal < 100 || numeroInicial > 1000) {
                console.log('ERRO: Digite somente números de 100 a 1000 na segunda lacuna, por favor.')
                entradaDados.close();
            }//Validação para limitação da entrada inicial de 0 a 500
            else if (numeroInicial >= numeroFinal) {
                console.log('ERRO: Digite no número inicial um valor maior que o número final')
                entradaDados.close();
            }//Validação para valores iguais
            else if (numeroInicial === numeroFinal) {
                console.log('ERRO: Digite digite números diferentes nas lacunas, por favor.')
                entradaDados.close();
            } else {

                imparesPares = parImpar.calcImparPar(numeroInicial, numeroFinal, decisao)
                entradaDados.close();
            }
        })
    })

})