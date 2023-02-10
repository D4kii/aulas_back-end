/****************************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 *  Data: 10/02/2023
 * Autor: Daniela
 * Versão: 1.0
 *****************************************************************************************************/
const calcularMedia = function (valor01, valor02, valor03, valor04) {
    let nota1 = Number(valor01);
    let nota2 = Number(valor02);
    let nota3 = Number(valor03);
    let nota4 = Number(valor04);
    let situacao = true;
    let media;

    media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
    
    

    if(media >= 70){
        situacao;
    } else if(media < 50){
        situacao = false;
    } else{
        calcularExame;
    }

    return media
};

const calcularExame = function(notaFinal, notaExame, exameFinal) {
    let valorMedia = Number

}

const montarFormulario = function(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notaFinal, exameFinal){

}

module.exports = {
    calcularMedia
}