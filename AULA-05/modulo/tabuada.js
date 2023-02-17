/****************************************************************************************
 * Objetico: Arquivo destinado ao processamento do calculo de uma tabuada
 * Data: 16/02/2023
 * Autor: Daniela Lino
 * Versão: 1.0
*****************************************************************************************/

//Retorna o processamento de uma tabuada qualquer até um contador qualquer
const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true; //start
    let resultado;


    if (tabuada == 0 || maxContador == 0)
        status === false;
    else if (isNaN(tabuada) || isNaN(maxContador))
        status === false;
    else {
        for (let cont = 0; cont <= maxContador; cont++) {
            resultado = tabuada * cont;
            console.log(`${tabuada} x ${cont} = ${resultado}`);
        }
    }
};

calcularTabuada(0, 10);

module.exports = {
    calcularTabuada
}