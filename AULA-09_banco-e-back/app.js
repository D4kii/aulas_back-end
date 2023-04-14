/*************************************************************************************************************
 * Objetvivo: API para integração entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Data: 14/04/2023
 * Autor: Daniela
 * Versão: 1.0
 *************************************************************************************************************/
//Import das bibliotecas para a API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');

//Cria o objeto app conforme a classe do express
const app = express();

//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a API (* - Todos)
    response.header('Acess-Control-Allow-Origin', '*');
    //Define quais métodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Atribui as permissões ao cors
    app.use(cors());

    next();
});

//CRUD: Create, Read, Update e Delete.

/*****************************************************************************
 * Objetivo: API de controle de ALUNOS
 * Data: 14/04/2023
 * Autor: Marcel
 * Versão: 1.0
 *****************************************************************************/


//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async, function (request, response) {

});

//EndPoint: Retorna os aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async, function (request, response) {

});

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.post('/v1/lion-school/aluno/:id', cors(), async, function (request, response) {

});

//EndPoint: Exclui um aluno existente, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async, function (request, response) {

});

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
})
