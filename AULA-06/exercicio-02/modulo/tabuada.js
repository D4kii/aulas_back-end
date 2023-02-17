/****************************************************************************************
 * Objetico: Arquivo destinado ao processamento do calculo de uma tabuada
 * Data: 09/02/2023
 * Autor: Daniela Lino
 * Versão: 1.0
*****************************************************************************************/

//Retorna o processamento de uma tabuada qualquer até um contador qualquer
const calcularTabuada = function (primeiroMultiplicando, segundoMultiplicando, minMultiplicador, maxMultiplicador) {
    let primeiroNumero = Number(String(primeiroMultiplicando).replace(',', '.'));
    let segundoNumero = Number(String(segundoMultiplicando).replace(',', '.'));
    let minContador = Number(String(minMultiplicador).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true; //start
    let resultado;


    if (minContador == 0 || segundoNumero == 0)
        status === false;
    else if (isNaN(minContador) || isNaN(maxContador))
        status === false;
    else {
        console.log(`\nTabuada do ${primeiroNumero}`)
        for (let cont = minContador; cont <= maxContador; cont++) {
            resultado = primeiroNumero * cont;
            console.log(`${primeiroNumero} x ${cont} = ${resultado}`);
        }
        console.log(`\nTabuada do ${segundoNumero}`)
        for (let cont = minContador; cont <= maxContador; cont++) {
            resultado = segundoNumero * cont;
            console.log(`${segundoNumero} x ${cont} = ${resultado}`);
        }







    }
};

calcularTabuada(0, 10);

module.exports = {
    calcularTabuada
}