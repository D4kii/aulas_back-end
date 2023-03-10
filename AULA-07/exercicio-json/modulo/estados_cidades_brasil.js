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
    const estadosJson = json.slice();
    const capitaisJson = {};
    const capitaisList = [];
    let status;

    estadosJson.forEach(estados => {
        if (estados.capital_pais !== undefined) {
            capitaisJson.capitais = capitaisList;

            console.log(estados.capital_pais);


            estados.capital_pais.forEach(capital => {
                const todasAsCapitais = {}
                todasAsCapitais.capital_atual = capital.capital;

            });



            todasAsCapitais.uf = estados.sigla;
            todasAsCapitais.capital_atual = estados.capital_pais;


            capitaisList.push(todasAsCapitais);




        }
        status = true;
    });
    console.log(capitaisJson)

}
const getCidades = function (json, filtro) {
    const estadosJson = json.slice();
    const cidadeDadosJson = {};
    const cidadesList = [];
    let status;

    if (estadosJson !== undefined) {
        estadosJson.forEach(estados => {

            estados.cidade.forEach( function(cidades) {
                cidadesList.push(cidades.nome)

                cidadeDadosJson.quantidade_cidades = cidadesList.length
                cidadeDadosJson.cidades = cidadesList

            });
            cidadeDadosJson.uf = estados.sigla;
            cidadeDadosJson.descricao = 
            cidadeDadosJson.quantidade = cidadesList.length;
        });
        status = true;
    } else {
        status = false;
    }

    if (status) {
        return cidadeDadosJson;
    }
}

console.log(getCidades(estadosJson))
// getCapitalPais(estadosJson);
// getEstadosRegiao(estadosJson, 'Sudeste')
// getCapitalEstado(estadosJson, 'AL')
// getDadosEstado(estadosJson, 'SP')
// getListaDeEstados(estadosJson)