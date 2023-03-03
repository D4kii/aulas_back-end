/****************************************************************************************
 * Objetico: Arquivo destinado ao processamento do números pares e ímpares
 * Data:17/02/2023
 * Autor: Daniela Lino
 * Versão: 1.0
*****************************************************************************************/

const calcImparPar = function (entrada01, entrada02, preferencia) {
    let valor01 = Number(entrada01);
    let valor02 = Number(entrada02);
    let escolha = preferencia;
    let contadorPar = 0;
    let contadorImpar = 0;

    if (valor02 == undefined || valor02 == undefined) {
        return false;
    } else {
        if (escolha == 'AMBOS') {
            for (let cont = valor01; cont <= valor02; cont++) {
                if (valor01 % 2 == 0) {
                    console.log(cont);
                }
                contadorPar++;
            }
            console.log(`\nquantidade de númerors pares: ${contadorPar}\n`);
            for (let cont = valor01; cont <= valor02; cont++) {
                if (cont % 2 == 1) {
                    console.log(cont);
                }
                contadorImpar++;
            }
            console.log(`\nquantidade de númerors impares: ${contadorImpar}`)
        } else if (escolha == 'PARES') {
            for (let cont = valor01; cont <= valor02; cont++) {
                if (valor01 % 2 == 0) {
                    console.log(cont);
                }
                contadorPar++;
            }
            console.log(`\nquantidade de númerors pares: ${contadorPar}\n`);
        } else if (escolha == 'IMPAR') {
            for (let cont = valor01; cont <= valor02; cont++) {
                if (cont % 2 == 1) {
                    console.log(cont);
                }
                contadorImpar++;
            }
            console.log(`\nquantidade de númerors impares: ${contadorImpar}`)
        }


    }

}
module.exports = {
    calcImparPar
}




