/*************************************************************************************************************
 * Objetvivo: Responsável pela regra de negócio de referente ao CRUD de alunos
 * Data: 14/04/2023
 * Autor: Daniela
 * Versão: 1.0
 *************************************************************************************************************/

//Inserir um novo aluno
const novoAluno = function (dadosAluno) {

}

//Atualizar um aluno existente
const atualizarAluno = function (dadosAluno) {

}

//Deletar um aluno existente
const deletarAluno = function (id) {

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
} else{
    console.log(1);
    
    return false;
}

}

//Retorna o aluno filtrando pelo id
const getBuscarAlunoID = function (id) {

}


module.exports = {
    getAlunos,
    getBuscarAlunoNome
}