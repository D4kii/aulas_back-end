/**********************************************************************************************
 * Objetivo: criar um Back-End para no futuro integrar em uma API que terá como 
 * objetivo trazer informações sobre os estados do Brasil.
 * Autor: Daniela Lino
 * Data: 03/03/2023
 * Versão: 1.0
 **********************************************************************************************/
var estadosBrasil = require('./estados_cidades.js')
const { estadosCidades } = require('./estados_cidades.js')

const estadoJson = estadosBrasil.estadosCidades.estados

const getListaDeEstados = function () {
    const estadosJson = estadoJson.slice();
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
const getDadosEstado = function (filtro) {
    const uf = filtro.toUpperCase();
    const estadosJson = estadoJson.slice()
    const dadosEstadoJson = {};
    let status;

    if (uf != undefined) {

        estadosJson.forEach(dados => {

            if (dados.sigla === uf) {
                dadosEstadoJson.uf = dados.sigla;
                dadosEstadoJson.descricao = dados.nome;
                dadosEstadoJson.capital = dados.capital;
                dadosEstadoJson.regiao = dados.regiao;
                status = true
            } else {
                return false;
            }
        });
    } else {
        status = false
    }

    if (status) {
        console.log(dadosEstadoJson);
        return dadosEstadoJson;

    } else {
        return false;
    }
}
const getCapitalEstado = function (filtro) {
    const uf = filtro.toUpperCase();
    const estadosJson = estadoJson.slice();
    const capitalJson = {};
    let status;

    if (uf != undefined) {
        estadosJson.forEach(estado => {

            if (estado.sigla == uf) {

                capitalJson.uf = estado.sigla;
                capitalJson.descricao = estado.nome;
                capitalJson.capital = estado.capital;
                status = true;
            } else {
                return false;
            }
        });

    } else {
        status = false;
    }

    if (status) {
        console.log(capitalJson)
        return capitalJson;
    } else {
        return false;
    }

}
const getEstadosRegiao = function (filtro) {
    const regiaoFiltro = filtro;
    const estadosJson = estadoJson.slice();
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

                status = true;
            } else {
               return false;
            }
        });

    } else {
        status = false;
    }

    if (status) {

        return regiaoJson;

    } else {

        return false;

    }

}
const getCapitalPais = function () {
    const estadosJson = estadoJson.slice();
    const capitaisJson = {};
    const capitaisList = [];
    let status;
    
        estadosJson.forEach(estados => {
            if (estados.capital_pais !== undefined) {
            console.log(2)

            capitaisJson.capitais = capitaisList;

            const todasAsCapitais = {}

            todasAsCapitais.capital_atual = estados.capital_pais.capital;

            todasAsCapitais.uf = estados.sigla;
            todasAsCapitais.descricao = estados.nome;
            todasAsCapitais.capital = estados.capital;
            todasAsCapitais.regiao = estados.regiao;
            todasAsCapitais.capital_pais_ano_inicio = estados.capital_pais.ano_inicio;
            todasAsCapitais.capital_pais_ano_termino = estados.capital_pais.ano_fim;

            capitaisList.push(todasAsCapitais);

            status = true;
        } else {
            console.log(estados.capital_pais)
            return false;
        }
        });

   

    if (status) {
        console.log(capitaisJson)
        return capitaisJson;
    } else {
        return false;
    }

}
const getCidades = function (filtro) {
    const uf = filtro.toUpperCase();
    const estadosJson = estadoJson.slice();
    const cidadeDadosJson = {};
    const cidadesList = [];
    let status;

    if (estadosJson !== undefined) {
        estadosJson.forEach(estados => {
            if (uf == estados.sigla) {

                estados.cidades.forEach(cidade => {
                    cidadesList.push(cidade.nome)

                    cidadeDadosJson.uf = estados.sigla;
                    cidadeDadosJson.descricao = estados.nome
                    cidadeDadosJson.quantidade_cidades = cidadesList.length
                    cidadeDadosJson.cidades = cidadesList
                    status = true;
                });

            }else{
                return false;
            }
        });
        
    } else {
        status = false;
    }

    if (status) {
        return cidadeDadosJson;
    } else{
        return false;
    }
}

//getCapitalPais(estadosJson)
// console.log(getCidades(estadosJson, 'AC'))
// getCapitalPais(estadosJson);
// getEstadosRegiao(estadosJson, 'Sudeste')
// getCapitalEstado(estadosJson, 'AL')
// getDadosEstado(estadosJson, 'SP')
// getListaDeEstados(estadosJson)

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}