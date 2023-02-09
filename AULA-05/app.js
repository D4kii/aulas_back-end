//Import da biblioteca da caculadora
var calculo = require('./modulo/tabuada.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//valor 1
entradaDados.question('primeiro número: \n', function (multiplicando) {
    //Replace - metodo da classe string que localiza um caractere e substitui por outro
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    //valor 2
    entradaDados.question('segundo número: \n', function (maxMultiplicador) {

        let maxContador = Number(String(maxMultiplicador).replace(',', '.'));

            let resultado;
            //Validação de entrada de dado vazio
            if (tabuada == '' || maxContador == '') {
                console.log('ERRO: Não é possível mostrar o resultado se algum dos dados estiver em branco')

                //}else if (typeof(valor1) != 'number')
                //typeof() - identifica o tipo de dados de um elemento
                //isNaN()
            } else if (isNaN(tabuada) || isNaN(maxContador)) {
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números')
            } else {
                //toUppercase - converte uma string em MAIÚSCULO
                //toLowerCase - converte uma string em minúsculo

                if(resultado === false )
                entradaDados.close();
                else
                console.log(`${tabuada} x ${cont} = ${resultado}`);
            }

       

    })

})