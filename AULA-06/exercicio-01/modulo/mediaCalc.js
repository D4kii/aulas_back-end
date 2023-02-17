/****************************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 *  Data: 10/02/2023
 * Autor: Daniela
 * Versão: 1.0
 *****************************************************************************************************/
const calcularMedia = function (valor01,
    valor02,
    valor03,
    valor04) {
    let nota1 = Number(valor01);
    let nota2 = Number(valor02);
    let nota3 = Number(valor03);
    let nota4 = Number(valor04);
    let situacao = true;
    let media;

    media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (media == undefined && media == false) {
        return false;
    }
    else {
        return media;
    }

};

const calcularExame = function (notaExame,
    media,
    aluno,
    professor,
    sexoAluno,
    sexoProfessor,
    curso,
    disciplina,
    valor01,
    valor02,
    valor03,
    valor04) {

    let nomeAluno = aluno;
    let nomeProf = professor;
    let alunoSexo = sexoAluno;
    let profSexo = sexoProfessor;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;
    let nota1 = valor01;
    let nota2 = valor02;
    let nota3 = valor03;
    let nota4 = valor04;
    let resultado;
    let valorMedia = media;
    let valorExame = notaExame;
    let situacao = true;


    resultado = (Number(valorMedia) + Number(valorExame)) / 2;


    if (alunoSexo == 'F'
        && profSexo == 'F' ||
        alunoSexo == 'FEMININO'
        && profSexo == 'FEMININO') {

        //Se a aluna foi reprovada de forma direta
        if (resultado >= 60) {

            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessora: ${nomeProf}
            \nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessora: ${nomeProf}
            \nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }
    } else if (alunoSexo == 'M'
        && profSexo === 'M' ||
        alunoSexo == 'MASCULINO'
        && profSexo === 'MASCULINO') {
        //Se a aluna foi reprovada de forma direta

        if (resultado >= 60) {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessor: ${nomeProf}
            \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessor: ${nomeProf}
            \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }

    } else if (alunoSexo == 'M'
        && profSexo === 'F'
        || alunoSexo == 'MASCULINO'
        && profSexo === 'FEMININO') {

        if (resultado >= 60) {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessora: ${nomeProf}
            \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessora: ${nomeProf}
            \nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}
            \nMédia final do Exame: ${resultado}`)
        }

    } else if (alunoSexo == 'F'
        && profSexo === 'M'
        || alunoSexo == 'FEMININO'
        && profSexo === 'MASCULINO') {

        if (resultado >= 60) {
            return console.log(`A aluna ${nomeAluno} 
            foi aprovada na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}\nProfessor: ${nomeProf}
            \nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}
            \nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessor: ${nomeProf}
            \nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            \nNota do exame: ${valorExame}
            \nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }

    } else {
        //Validação para tratar quando a variável resultado não for processada por algum problema

        situacao = false;

    }

}
const montarFormulario = function (aluno,
    professor,
    sexoAluno,
    sexoProfessor,
    curso,
    disciplina,
    valor01,
    valor02,
    valor03,
    valor04,
    media) {

    let nomeAluno = aluno;
    let nomeProf = professor;
    let alunoSexo = sexoAluno;
    let profSexo = sexoProfessor;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;
    let nota1 = valor01;
    let nota2 = valor02;
    let nota3 = valor03;
    let nota4 = valor04;
    let notaFinal = media;
    let situacao = true;

    //Se a aluna foi reprovada de forma direta
    if (notaFinal < 50) {
        if (alunoSexo == 'F'
            && profSexo == 'F' ||
            alunoSexo == 'FEMININO'
            && profSexo == 'FEMININO') {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}
            \nCurso: ${nomeCurso}
            \nProfessora: ${nomeProf}
            \nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}
            
            \nMédia Final: ${notaFinal}`),
                console.log('1')
        } else if (alunoSexo == 'M'
            && profSexo === 'M' ||
            alunoSexo == 'MASCULINO'
            && profSexo === 'MASCULINO'
        ) {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`),
                console.log('2')
        } else if (alunoSexo == 'F'
            && profSexo === 'M'
            || alunoSexo == 'FEMININO'
            && profSexo === 'MASCULINO') {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`),
                console.log('3')
        } else if (alunoSexo == 'M'
            && profSexo === 'F'
            || alunoSexo == 'MASCULINO'
            && profSexo === 'FEMININO') {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`),
                console.log('4')
        } else {
            situacao = false;
        }
     //Se a aluna foi aprovada de forma direta
    } else if (notaFinal >= 70) {

        if (alunoSexo == 'F'
            && profSexo == 'F' ||
            alunoSexo == 'FEMININO'
            && profSexo == 'FEMININO') {
            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'M'
            && profSexo === 'M' ||
            alunoSexo == 'MASCULINO'
            && profSexo === 'MASCULINO') {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'M'
            && profSexo === 'F'
            || alunoSexo == 'MASCULINO'
            && profSexo === 'FEMININO') {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'F'
            && profSexo === 'M'
            || alunoSexo == 'FEMININO'
            && profSexo === 'MASCULINO') {
            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        }else{
            situacao = false;
        }

    } else {
        situacao = false;
    }
}

module.exports = {
    montarFormulario,
    calcularMedia,
    calcularExame

}