//Import da biblioteca da caculadora
var calculo = require('./modulo/tabuada.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//valor da primeira tabuada
entradaDados.question('Primeiro número: \n', function (primeiroMultiplicando) {
    //Replace - metodo da classe string que localiza um caractere e substitui por outro
    let primeiraTabuada = Number(String(primeiroMultiplicando).replace(',', '.'));
    //valor da segunda tabuada
    entradaDados.question('Segundo número: \n', function (segundoMultiplicando) {

        let segundaTabuada = Number(String(segundoMultiplicando).replace(',', '.'));
        //valor da multiplicação inicial
        entradaDados.question('Contador inicial: \n', function (minMultiplicador) {

            let minContador = Number(String(minMultiplicador).replace(',', '.'));
            //valor da multiplicação final
            entradaDados.question('Contador final: \n', function (maxMultiplicador) {

                let maxContador = Number(String(maxMultiplicador).replace(',', '.'));


                //Validação de entrada de dado vazio
                if (segundaTabuada == '' || primeiraTabuada == '' || maxContador == '' || minContador == '') {
                    console.log('ERRO: Não é possível mostrar o resultado se algum dos dados estiver em branco')
                    entradaDados.close();


                    //validação para entrada inválida
                } else if (primeiraTabuada < 2 || primeiraTabuada > 100 || segundaTabuada < 2 || segundaTabuada > 100) {
                    console.log('ERRO: por favor, digite apenas números de 2 a 100 na primeira e segunda lacuna.');
                    entradaDados.close();

                } else if (minContador < 1 || minContador > 50 || maxContador < 1 || maxContador > 50) {
                    console.log('ERRO: por favor, digite apenas números de 1 a 50 na terceira e quarta lacuna.');
                    entradaDados.close();
                    //validação para entrada inválida(contador mínimo ser maior que o máximo)
                } else if (minContador > maxContador) {
                    console.log('ERRO: por favor, digite na lacuna do contador final um número maior que o contador inicial.');
                    entradaDados.close();
                    //Validação de entrada não numérica
                } else if (isNaN(primeiraTabuada) || isNaN(segundaTabuada) || isNaN(maxContador) || isNaN(minContador)) {
                    console.log('ERRO: Não é possível calcular se os dados digitados não forem números');
                    entradaDados.close();
                } else {
                    //toUppercase - converte uma string em MAIÚSCULO
                    //toLowerCase - converte uma string em minúsculo

                    tabuadaResultado = calculo.calcularTabuada(primeiraTabuada,
                        segundaTabuada,
                        minContador,
                        maxContador)
                    entradaDados.close()
                }

            })
        })

    })

})