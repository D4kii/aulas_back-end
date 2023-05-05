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

/// eu acabei de pegar duas mina do sesi se beijando no banheiro
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

/**
 * 
 *     npm install prisma --save
 *     npx prisma
 *     npx prisma init
 *     npm install @prisma/client --save
 *     
 *     npx prisma migrate dev -- serve para realizar o sincronismo entre o prisma e o BD
 * 
 */


//Define que os dados que iram chegar no body da requisição será no padrão JSON
const bodyParserJSON = bodyParser.json();

//Import do arquivo da controller que irá solicitar a model os dados da BD
var controllerAluno = require('./controller/controller_aluno.js');
const controller_aluno = require('./controller/controller_aluno.js');

var message = require('./controller/modulo/config.js')



//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

    let dadosAluno = await controllerAluno.getAlunos();

    if (dadosAluno) {
        response.json(dadosAluno);
        response.status(200);
    } else {
        response.json();
        response.status(404);
    }

});

//EndPoint: Retorna os aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

    //Recebe o nome do aluno que será enviada pela URL da requisição
    let idAluno = request.params.id
    console.log(idAluno);


    let dadosAlunosById = await controllerAluno.getBuscarAlunoID(idAluno)

    if (dadosAlunosById) {
        response.json(dadosAlunosById);
        response.status(dadosAlunosById.status);
    } else {
        response.json(dadosAlunosById);
        response.status(dadosAlunosById.status);
    }

});

//EndPoint: Retorna os aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response) {
    //Recebe o nome do aluno que será enviada pela URL da requisição
    let nomeAluno = request.params.nome
    console.log(nomeAluno);


    let dadosAlunosByName = await controllerAluno.getBuscarAlunoNome(nomeAluno)

    if (dadosAlunosByName) {
        response.json(dadosAlunosByName);
        response.status(200);
    } else {
        response.json();
        response.status(400);
    }

});

//EndPoint: Insere um aluno =novo
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function(request, response) {

    let contentType = request.headers['content-type'];

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLocaleLowerCase() == 'application/json' ) {
        //Recebe os dados encaminhados na requisição 
        let dadosBody = request.body;

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody);
    
        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno)

    }else{
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE);
    }


});

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function(request, response) {

    let contentType = request.headers['content-type'];

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLocaleLowerCase() == 'application/json' ) {
        
        //Recebe o ID do aluno pelo parametro
        let idAluno = request.params.id;
        //Receb os dados dos alunos encaminhado no corpo da requisição
        let dadosBody = request.body;
    
        //Encaminha os dados para a controller
        let resultDadosAluno = await controller_aluno.atualizarAluno(dadosBody, idAluno);
    
        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);

    }else{
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE);
    }


});

//EndPoint: Exclui um aluno existente, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {
    //Recebe o ID do aluno pelo parametro
    let idAluno = request.params.id;

    let buscaPeloId = await controllerAluno.getBuscarAlunoID(idAluno)

    if (buscaPeloId.status !== 404) {
    
        //Encaminha os dados para a controller
        let resultDadosAluno = await controller_aluno.deletarAluno(idAluno);
    
        response.status(resultDadosAluno.status);
        response.json(resultDadosAluno);
        
    }else{
        response.status(buscaPeloId.status)
        response.json(buscaPeloId)
    }
    


});



app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080')
})