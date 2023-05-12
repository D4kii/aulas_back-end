/*************************************************************************************************************
 * Objetvivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 14/04/2023
 * Autor: Daniela
 * Versão: 1.0
 *************************************************************************************************************/

//Import da biblioteca do prisma client 
let { PrismaClient } = require('@prisma/client');

//Instancia da classe PrismaClient
var prisma = new PrismaClient();

//Inerir dados do aluno no Banco de Dados
const insertAluno = async function (dadosAluno) {

    let sql = `insert into tbl_aluno (
            nome,
            rg,
            cpf,
            data_nascimento,
            email

    ) values (
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'

    )`;

    //Executa o scriptSQL no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if (resultStatus) {
        return true;
    } else {
        return false;
    }

};

//Atualizar dados do aluno no Banco de Dados
const updateAluno = async function (dadosAluno) {
    //scriptSQL para atualizar os dados no BD 
    let sql = `update tbl_aluno set
                    nome = '${dadosAluno.nome}',
                    rg = '${dadosAluno.rg}',
                    cpf = '${dadosAluno.cpf}',
                    data_nascimento = '${dadosAluno.data_nascimento}',
                    email = '${dadosAluno.email}'
                where id = ${dadosAluno.id}`;

    //Executa o script no DB
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    if (resultStatus) {
        return true;
    } else {
        return false;
    }


};

//Deletar dados do aluno no Banco de Dados
const deleteAluno = async function (id) {
    let idAluno = id;
    console.log(idAluno);

    //ScriptSQL para buscar todos os itens no BD
    let sql = `delete from tbl_aluno where id = ${idAluno}`;


    //Executa o script no DB
    let resultStatus = await prisma.$executeRawUnsafe(sql);

    //Valida se o banco de dados retornou algum registro 
    if (resultStatus) {
        return true;
    } else {
        return false;
    }
};

//Retornar todos os alunos no Banco de Dados
const selectAllAlunos = async function () {

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
const selectByIdAlunos = async function (id) {
    let idAluno = id;

    //ScriptSQL para buscar todos os itens no BD
    let sql = `select * from tbl_aluno where id = ${idAluno}`;


    //$queryRawUnsafe() - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no método
    let rsIdAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro 
    if (rsIdAluno.length > 0) {
        return rsIdAluno;
    } else {
        return false;
    }
};

//Retorna o último ID inserido no DB
const selectLastId = async function (id) {

    let sql = 'select * from tbl_aluno order by id desc limit 1;'

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if (rsAluno.length > 0) {
        return rsAluno;
    } else {
        return false;
    }
}

module.exports = {
    selectAllAlunos,
    selectByNameAluno,
    insertAluno,
    selectByIdAlunos,
    updateAluno,
    deleteAluno,
    selectLastId
}