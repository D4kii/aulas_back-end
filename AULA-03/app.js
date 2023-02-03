/*************************************************************************************
 * Objetivo: Fazer uma aplicação calculadora, que execute operações de divisão, adição, subtração e multiplicação.
 * Autor: Daniela Lino
 * Data: 30/01/2023
 * Versão: 1.0. 
 * 
 *************************************************************************************/
var readline = require('readline'); 

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

entradaDados.question('******************************Calculadora******************************\n Use:\n * Para multiplicar\n / para dividir\n + para adição\n - para subtração.\n ******************************************************************\n Insira o primeiro número da operação:\n', function(valor1){
    let number1 = valor1.replace(',', '.');

        entradaDados.question('Insira a forma de operação:\n', function (oper) {
            let operacao = oper;
            
            entradaDados.question('Insira o segundo número:\n', function (valor2) {
                let number2 = valor2.replace(',', '.');

                let resultado;
                if(number1 == '' || number2 == '' || oper == ''){
                    console.log('ERRO: por favor, preencha todas as lacunas.')
                } else if( isNaN(number1) || isNaN(number2)){
                    console.log('ERRO: Não insira letras ou outros caracteres na lacuna de números, por favor.')
                } else if(operacao !== '*' && operacao !== '/' && operacao !== '+' && operacao !== '-'){
                    console.log('ERRO: Insira na lacuna de operação algum caractere descrito na legenda acima, por favor.')
                } else {
                    if(operacao === '*'){
                        resultado = Number(number1) * Number(number2);
                        console.log(`Resultado: ${resultado}`)
                    } else if(operacao === '/'){
                        resultado = Number(number1) / Number(number2);
                        console.log(`Resultado: ${resultado}`)
                    } else if (operacao === '-'){
                        resultado = Number(number1) - Number(number2);
                        console.log(`Resultado: ${resultado}`)
                    } else if(operacao === '+'){
                        resultado = Number(number1) + Number(number2);
                        console.log(`Resultado: ${resultado}`)
                    } 
                }
            })
        })
})    
