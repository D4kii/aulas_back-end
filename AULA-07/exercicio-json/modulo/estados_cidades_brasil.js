/**********************************************************************************************
 * Objetivo: criar um Back-End para no futuro integrar em uma API que terá como 
 * objetivo trazer informações sobre os estados do Brasil.
 * Autor: Daniela Lino
 * Data: 03/03/2023
 * Versão: 1.0
 **********************************************************************************************/
var estadosBrasil = require('../estados_cidades.js')
const { estadosCidades } = require('../estados_cidades.js')

const estadosJson = estadosBrasil.estadosCidades.estados

const getListaDeEstados = function (json) {
    const estadosJson = json.slice();
    const siglasJson = {};
    const ufList = [];
    let status;

    if (estadosJson !== undefined) {
        estadosJson.forEach(estadosSiglas => {
            ufList.push(estadosSiglas.sigla);
            siglasJson.UF = ufList;
            siglasJson.quantidade = ufList.length;
        });
        status = true;
    } else {
        status = false;
    }

    if (status) {
        return siglasJson;
    }
}
const getDadosEstado = function (json, filtro) {
    const uf = filtro;
    const estadoJson = json.slice()
    const dadosEstadoJson = {};
    let status;

    if (uf !== undefined) {

        estadoJson.forEach(dados => {

            if (dados.sigla === uf) {
                dadosEstadoJson.uf = dados.sigla;
                dadosEstadoJson.descricao = dados.nome;
                dadosEstadoJson.capital = dados.capital;
                dadosEstadoJson.regiao = dados.regiao;
            }
        });

        status = true
    } else {
        status = false
    }

    if (status) {
        return dadosEstadoJson;

    } else {
        console.log('ERRO');
        return false;
    }
}
const getCapitalEstado = function (json, filtro) {
    const uf = filtro;
    const estadoJson = json.slice();
    const capitalJson = {};
    let status;

    if (uf !== undefined) {
        estadoJson.forEach(estado => {

            if (estado.sigla === uf) {

                capitalJson.uf = estado.sigla;
                capitalJson.descricao = estado.nome;
                capitalJson.capital = estado.capital;
            }

        });

        status = true;

    } else {
        status = false;
    }

    if (status) {
        return capitalJson;
    } else {
        return false;
    }

}
const getEstadosRegiao = function (json, filtro) {
    const regiaoFiltro = filtro;
    const estadosJson = json.slice();
    const regiaoJson = {};
    const estadosList = [];
    let status;

    if (regiaoFiltro !== undefined) {

        estadosJson.forEach(regioesEstados => {

            if (regioesEstados.regiao == regiaoFiltro) {

                regiaoJson.regiao = regioesEstados.regiao;
                regiaoJson.estados = estadosList;

                const estadosPorRegiao = {};

                estadosPorRegiao.uf = regioesEstados.sigla;
                estadosPorRegiao.descricao = regioesEstados.nome;

                estadosList.push(estadosPorRegiao);

            }
        });
        status = true;
    } else {
        status = false;
    }

    if (status) {
        return regiaoJson;
    } else {
        return false;
    }

}
const getCapitalPais = function (json) {
    
}
const getCidades = function (json, filtro) {
    
}

// getEstadosRegiao(estadosJson, 'Sudeste')
// getCapitalEstado(estadosJson, 'AL')
// getDadosEstado(estadosJson, 'SP')
// getListaDeEstados(estadosJson)