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

//Dependencia para criar as requisições da API
const express = require('express');
//Dependencia para gerenciar as permissões da API
const cors = require('cors');
//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');

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
    app.get('/estados', cors(), async function(request, response, next){
        const estadosCidades = require('./modulo/estados_cidades_brasil.js');
        let estados = estadosCidades.getListaDeEstados();
        response.status(200);
        response.json(estados);
    });

    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080')
    })




