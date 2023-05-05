/*************************************************************************************************************
 * Objetvivo: Responsável pela regra de negócio de referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autor: Daniela
 * Versão: 1.0
 *************************************************************************************************************/

//Import do arquivo para acessar dados do aluno
var alunoDAO = require('./../model/DAO/alunoDAO.js');

//Import do arquivo de configuração das variaveis, constantes e funções globais
var message = require('./modulo/config.js');

//Inserir um novo aluno
const inserirAluno = function (dadosAluno) {

    //validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.lenght > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.lenght > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.cpf.lenght > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.lenght > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS;
    } else {
        //Envia os dados para a model inserir no BD
        let resultDadosAluno = alunoDAO.insertAluno(dadosAluno);

        //Valida se o DB inseriu corretamente os dados
        if (resultDadosAluno) {
            return message.SUCCESS_CREATED_ITEM; //status code 201
        } else {
            return message.ERROR_INTERNAL_SERVER; //status code 500
        }
    }
}

//Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {
    //validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.lenght > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.lenght > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.cpf.lenght > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.lenght > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS; //status code 400

        //validação de ID incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID; //status code 400 
    } else {
        //Adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idAluno

        //Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno);

        if (resultDadosAluno) {
            return message.SUCCESS_UPDATED_ITEM; //200
        } else {
            return message.ERROR_INTERNAL_SERVER; //500
        }
    }

}

//Deletar um aluno existente
const deletarAluno = async function (idAluno) {

    //validação de ID incorreto ou não informado
    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID; //status code 400 
    } else {

        //Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.deleteAluno(idAluno)

        if (resultDadosAluno) {
            return message.SUCCESS_DELETED_ITEM; //200
        } else {
            return message.ERROR_INTERNAL_SERVER; //500
        }
    }
}
//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunosJSON = {}

    //Import do arquivo DAO para acessar dados do aluno do BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    //chama a função do arquivo DAO que irá retornar todos os registros do DB
    let dadosAluno = await alunoDAO.selectAllAlunos();


    if (dadosAluno) {
        //Criando um JSON com o atrbuto alunos, para encaminhar um array de alunos
        dadosAlunosJSON.alunos = dadosAluno;
        return dadosAlunosJSON;
    } else {
        return false;
    }

}

//Retorna alunos filtrando pelo nome
const getBuscarAlunoNome = async function (nome) {
    let nomeAluno = nome
    console.log(nomeAluno);


    let dadosByNomeAlunoJSON = {}

    //Import do arquivo DAO para acessar dados do aluno do BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    if (isNaN(nomeAluno) && nomeAluno !== undefined && nomeAluno !== '') {

        //chama a função do arquivo DAO que irá retornar todos os registros do DB
        let dadosByNomeAluno = await alunoDAO.selectByNameAluno(nomeAluno);


        if (dadosByNomeAluno) {
            //Criando um JSON com o atrbuto alunos, para encaminhar um array de alunos
            dadosByNomeAlunoJSON.alunos = dadosByNomeAluno;

            console.log(dadosByNomeAlunoJSON);
            return dadosByNomeAlunoJSON;
        } else {
            return false;
        }
    } else {

        return false;
    }

}

//Retorna o aluno filtrando pelo id
const getBuscarAlunoID = async function (id) {

    let idAluno = id
    console.log(idAluno);


    let dadosByIdAlunoJSON = {}

    //Import do arquivo DAO para acessar dados do aluno do BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    if (!isNaN(idAluno) && idAluno !== undefined && idAluno !== '') {

        //chama a função do arquivo DAO que irá retornar todos os registros do DB
        let dadosByIdAluno = await alunoDAO.selectByIdAlunos(idAluno);


        if (dadosByIdAluno) {
            //Criando um JSON com o atrbuto alunos, para encaminhar um array de alunos
            dadosByIdAlunoJSON.alunos = dadosByIdAluno;

            console.log(dadosByIdAlunoJSON);
            return dadosByIdAlunoJSON;
        } else {
            return message.ERROR_ID_NOT_FOUND;
        }
    } else {
        return false;
    }



}


module.exports = {
    getAlunos,
    getBuscarAlunoNome,
    inserirAluno,
    getBuscarAlunoID,
    atualizarAluno,
    deletarAluno
}