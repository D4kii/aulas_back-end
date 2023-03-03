/**********************************************************************************************
 * Objetivo: criar um Back-End para no futuro integrar em uma API que terá como 
 * objetivo trazer informações sobre os estados do Brasil.
 * Autor: Daniela Lino
 * Data: 03/03/2023
 * Versão: 1.0
 **********************************************************************************************/
var  estadosCidades = require('../estados_cidades.js')

    const estadosJson = estadosCidades.estadosCidades.estados

const getListaDeEstados = function(estados){

    console.log(estadosJson[1])
}
getListaDeEstados(estadosCidades)