/*********************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Daniela
 * Data: 10/03/2023
 * Versão: 1.0
 *********************************************************************************/

/**
 * 
 * Express - dependencia para realizar requisições de API pelo protocolo HTTP
 *     npm install express --save
 * Cors - dependencia para gerenciar permissões de requisição da API
 *     npm install cors -- save
 * 
 * Body-Parser - dependencia que gerencia o corpo das requisições
 *     npm install body-parser --save
 * 
 */


//Import das dependencias do projeto

//Import do arquivo no modulo (funções)
//const estadosCidades = require('./modulo/estados_cidades_brasil.js');

//Dependencia para criar as requisições da API
const express = require('express');

//Dependencia para gerenciar as permissões da API
const cors = require('cors');

//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');
const  estadosCidades  = require('./modulo/estados_cidades_brasil.js');

//Cria um objeto com as características do express
const app = express();

app.use((request, response, next) => {
    //API pública - fica disponível para utilização de qualquer aplicação
    //API privada - somente o IP informado poderá consumir dados da API

    //Define se a API será publica ou privada
    response.header('Access-Control-Allow-Origin', '*');

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Envia para o cors() as regras de permissões
    app.use(cors());

    next();
})

    //Endpoints
    //async - estabelece um status de aguarde, "assim que eu processar eu devolvo os dados" 
    //Obs: se não usar usar o async, a requisição é perdida, pois o front acha a API está fora do ar

    //EndPoin para listar todos os estados
    app.get('/estados', cors(), async function (request, response, next) {
        

        //Chama a função que vai listar todos os estados
        let estados = estadosCidades.getListaDeEstados();

        //Tratamento para validar o sucesso da requisição 
        if (estados) {
            response.status(200);
            response.json(estados);

        } else {
            response.status(500);
        }



    });

    //EndPoint: lista os dados do estado filtrando pela sigla do estado
    app.get('/estado/:uf', cors(), async function(request, response, next){

        let statusCode;
        let dadosEstado = {};

        //Recebe a sigla do estado que será enviada pela URL da requisição
        let siglaEstado = request.params.uf
        console.log(siglaEstado)

        //Tratamento para validação de entrada de dados incorreta
        if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
            response.status(400);
            dadosEstado.message = 'Não foi possível processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, precisa ser caracteres e ter 2 digitos'
        } else{

            let estado = estadosCidades.getDadosEstado(siglaEstado);

            if (estado) {
                statusCode = 200;
                dadosEstado = estado;
            }else{
                statusCode = 404;
            }
        }
        //Retorna o código e o JSON
        response.status(statusCode);
        response.json(dadosEstado);
    });

    //EndPoint: lista as informações referente a capital de um estado do Brasil, onde a sigla do estado será o critério de filtro.
    app.get('/capitalEstado/uf:', cors(), async function(request, response, next){

        let statusCode;
        let dadosCapital = {};
        
        //Recebe a sigla do estado que será enviada pela URL da requisição
        let siglaEstadoCapital = request.params.uf
        console.log(siglaEstadoCapital)

        //Tratamento para validação de entrada de dados incorreta
        if (siglaEstadoCapital == '' || siglaEstadoCapital == undefined || siglaEstadoCapital.length != 2 || !isNaN(siglaEstadoCapital)) {
            response.status(400);
            dadosEstado.message = 'Não foi possível processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, precisa ser caracteres e ter 2 digitos'
        } else{

            let estadoCapital = estadosCidades.getCapitalEstado(siglaEstadoCapital);
            console.log(estadoCapital)
            if (estadoCapital) {
                statusCode = 200;
                dadosCapital = estadoCapital;
            }else{
                statusCode = 404;
            }
        }
        //Retorna o código e o JSON
        response.status(statusCode);
        response.json(dadosCapital);
    });


//Roda o serviço da API para ficar guardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080')
})




