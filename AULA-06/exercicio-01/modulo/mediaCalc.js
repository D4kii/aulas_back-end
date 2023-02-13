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
    let valorMedia = Number(media);
    let valorExame = Number(notaExame);
    let situacao = true;


    resultado = (Number(valorMedia) + Number(valorExame)) / 2;


    if (alunoSexo === 'f'
        || alunoSexo === 'F'
        && profSexo === 'f'
        || alunoSexo === 'F') {

        //Se a aluna foi reprovada de forma direta
        if (resultado >= 60) {

            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }
    } else if (alunoSexo == 'M'
        || alunoSexo == 'm'
        && profSexo == 'M'
        || profSexo == 'm') {
        //Se a aluna foi reprovada de forma direta

        if (resultado >= 60) {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }

    } else if (alunoSexo == 'M'
        || alunoSexo == 'm'
        && profSexo == 'F'
        || profSexo == 'f') {

        if (resultado >= 60) {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }

    } else if (alunoSexo == 'F'
        || alunoSexo == 'f'
        && profSexo == 'M'
        || profSexo == 'm') {

        if (resultado >= 60) {
            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        } else {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${valorExame}\nMédia Final: ${valorMedia}\nMédia final do Exame: ${resultado}`)
        }

    } else {
        //Validação para tratar quando a variável resultado não for processada por algum problema
        console.log('alooou')

        return false;

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

    if (notaFinal <= 50) {
        //Se a aluna foi reprovada de forma direta
        if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'MASCULINO'
            || alunoSexo == 'M'
            || alunoSexo == 'HOMEM'
            && profSexo == 'MASCULINO'
            || profSexo == 'M'
            || profSexor == 'HOMEM') {
            return console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)

        } else if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`o aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        }
    } else if (notaFinal >= 70) {
        //Se a aluna foi reprovada de forma direta
        if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (alunoSexo == 'F'
            || alunoSexo == 'f'
            && profSexo == 'M'
            || profSexo == 'm') {
            return console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        }
        //Se a aluna foi reprovada de forma direta

    } else {
        return false;
    }

}


// console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\n
// Curso: ${nomeCurso}\n
// Professora: ${nomeProf}\n
// Notas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\n
// Nota do exame: ${notaExame}\n
// Média Final: ${notaFinal}\n
// Média final do Exame: ${mediaExame}`)



module.exports = {
    montarFormulario,
    calcularMedia,
    calcularExame

}