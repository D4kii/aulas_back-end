/***************************************************************************
 * Objetivo: Projeto para realizar calculos matemáticos(SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 03/02/2023
 * Autor: Daniela
 * Versão: 1.0
 **************************************************************************/
//Import da biblioteca da caculadora
var matematica = require('./modulo/calculadora.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//valor 1
entradaDados.question('valor: \n', function (numero1) {
    //Replace - metodo da classe string que localiza um caractere e substitui por outro
    let valor1 = numero1.replace(',', '.');
    //valor 2
    entradaDados.question('valor2: \n', function (numero2) {

        let valor2 = numero2.replace(',', '.');
        //Tipo de operação
        entradaDados.question('Escolha uma operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]\n', function (tipoCalculo) {

            let operacao = tipoCalculo.toUpperCase();
            let resultado;
            //Validação de entrada de dado vazio
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular se algum dos dados estiver em branco')

                //}else if (typeof(valor1) != 'number')
                //typeof() - identifica o tipo de dados de um elemento
                //isNaN()
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números')
            } else {
                //toUppercase - converte uma string em MAIÚSCULO
                //toLowerCase - converte uma string em minúsculo

                resultado = matematica.calculadora(valor1, valor2, operacao) != false;
                if(resultado != false)
                console.log(resultado)
                else
                entradaDados.close();

            }

        })

    })

})