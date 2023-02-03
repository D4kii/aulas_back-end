/*************************************************************************************
 * Objetivo: arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autor: Daniela
 * Versão: 1.0
 *************************************************************************************/
//Função para realizar calculos matemáticos(SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;
    } else if (operacao == 'DIVIDIR') {
        if (valor == 0) {
            console.log('ERRO: Não é possível realizar a divisão por 0')
        } else {
            resultado = valor1 / valor2;
        }
    } else {
        console.log('ERRO: Sua escolha de operação matemática foi inválida');
        entradaDados.close();
    }
    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined) {
        return false
    }
    else {
       return resultado;
    }
}
//Permite adicionar uma function no escopo global(public)
//As funções que não estiverem aqui no export, serão tratadas apenas como escopo local(private)
module.exports = {
    calculadora
}