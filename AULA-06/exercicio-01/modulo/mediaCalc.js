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

const calcularExame = function (notaExame, media) {
    let valorMedia = Number(media);
    let valorExame = Number(notaExame);
    let situacao = true;
    let resultado;

    resultado = (Number(valorMedia) + Number(valorExame)) / 2;

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined && resultado == false) {
        return false;
    }
    else {
        return resultado;
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
    valorExame,
    media,
    exameMedia) {

    let nomeAluno = aluno;
    let nomeProf = professor;
    let alunoSexo = sexoAluno.toUpperCase();
    let profSexo = sexoProfessor.toUpperCase();
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;
    let nota1 = valor01;
    let nota2 = valor02;
    let nota3 = valor03;
    let nota4 = valor04;
    let notaExame = valorExame;
    let notaFinal = media;
    let mediaExame = exameMedia;

    if (alunoSexo == 'FEMININO'
        || alunoSexo == 'F'
        || alunoSexo == 'MULHER'
        || profSexo == 'F'
        || profSexo == 'FEMININO'
        || profSexo == 'MULHER') {
        //Se a aluna foi reprovada de forma direta
        if (notaFinal < 50) {
            console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (notaFinal >= 70) {
            console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)

        } else {
            if (mediaExame >= 60) {
                console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            } else {
                console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            }
        }
    } else if (alunoSexo == 'MASCULINO'
        || alunoSexo == 'M'
        || alunoSexo == 'HOMEM'
        || profSexo == 'MASCULINO'
        || profSexo == 'M'
        || profSexor == 'HOMEM') {
        //Se a aluna foi reprovada de forma direta
        if (notaFinal < 50) {
            console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (notaFinal >= 70) {
            console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)

        } else {
            if (mediaExame >= 60) {
                console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            } else {
                console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessor: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            }
        }
    } else if (alunoSexo == 'MASCULINO'
        || alunoSexo == 'M'
        || alunoSexo == 'HOMEM'
        || profSexo == 'F'
        || profSexo == 'FEMININO'
        || profSexo == 'MULHER') {
        //Se a aluna foi reprovada de forma direta
        if (notaFinal < 50) {
            console.log(`O alunO ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (notaFinal >= 70) {
            console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)

        } else {
            if (mediaExame >= 60) {
                console.log(`O aluno ${nomeAluno} foi aprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            } else {
                console.log(`O aluno ${nomeAluno} foi reprovado na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            }
        }
    } else if (alunoSexo == 'FEMININO'
        || alunoSexo == 'F'
        || alunoSexo == 'MULHER'
        || profSexo == 'MASCULINO'
        || profSexo == 'M'
        || profSexo == 'HOMEM') {
        //Se a aluna foi reprovada de forma direta
        if (notaFinal < 50) {
            console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)
        } else if (notaFinal >= 70) {
            console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia Final: ${notaFinal}`)

        } else {
            if (mediaExame >= 60) {
                console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            } else {
                console.log(`A aluna ${nomeAluno} foi reprovada na disciplina ${nomeDisciplina}\nCurso: ${nomeCurso}\nProfessora: ${nomeProf}\nNotas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nNota do exame: ${notaExame}\nMédia Final: ${notaFinal}\nMédia final do Exame: ${mediaExame}`)
            }
        }
    } else {
        //Validação para tratar quando a variável resultado não for processada por algum problema
        
            return false;
        
    }


    // console.log(`A aluna ${nomeAluno} foi aprovada na disciplina ${nomeDisciplina}\n
    // Curso: ${nomeCurso}\n
    // Professora: ${nomeProf}\n
    // Notas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}\n
    // Nota do exame: ${notaExame}\n
    // Média Final: ${notaFinal}\n
    // Média final do Exame: ${mediaExame}`)

}
module.exports = {
    calcularMedia,
    calcularExame,
    montarFormulario
}