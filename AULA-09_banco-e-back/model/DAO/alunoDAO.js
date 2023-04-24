/*************************************************************************************************************
 * Objetvivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 14/04/2023
 * Autor: Daniela
 * Versão: 1.0
 *************************************************************************************************************/

//Import da biblioteca do prisma client 
let { PrismaClient } = require('@prisma/client');

//Inerir dados do aluno no Banco de Dados
const insertAluno = function () {

};

//Atualizar dados do aluno no Banco de Dados
const updateAluno = function () {

};

//Deletar dados do aluno no Banco de Dados
const deleteAluno = function () {

};

//Retornar todos os alunos no Banco de Dados
const selectAllAlunos = async function () {

    //Instancia da classe PrismaClient
    let prisma = new PrismaClient();

    //ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno';
    console.log(sql);


    //$queryRawUnsafe() - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro 
    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false;
    }

};

//Seleciona o aluno filtrando pelo nome
const selectByNameAluno = async function (name) {
    let nomeAluno = name;
    console.log(nomeAluno);

    //Instancia da classe PrismaClient
    let prisma = new PrismaClient();

    //ScriptSQL para buscar todos os itens no BD
    let sql = `select * from tbl_aluno where nome like '%${nomeAluno}%'`;
    
    
    //$queryRawUnsafe() - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no método
    let rsNomeAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro 
    if (rsNomeAluno.length > 0) {
        return rsNomeAluno;
    } else {
        return false;
    }

}

//Retornar o aluno filtrando pelo ID
const selectByIdAlunos = function () {

};

module.exports = {
    selectAllAlunos,
    selectByNameAluno
}







