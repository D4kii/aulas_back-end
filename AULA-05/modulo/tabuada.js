/****************************************************************************************
 * Objetico: Arquivo destinado ao processamento do calculo de uma tabuada
 * Data: 09/02/2023
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

        //2x0=0
        // while (cont <= maxContador) {
        //     resultado = tabuada * cont;
        //     console.log(`${tabuada} x ${cont} = ${resultado}`);
        //     //cont = cont + 1;
        //     //cont++
        //     cont += 1;
        // }



    }
};

calcularTabuada(0, 10);

module.exports = {
    calcularTabuada
}