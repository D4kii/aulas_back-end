//Import do arquivo médiaCalc
var mediaCalc = require('./modulo/mediaCalc.js')

//Import da biblioteca de entrada de dados 
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//valor 1 = aluno
entradaDados.question('Nome do(a) Aluno(a): ', function (aulista) {

    let aluno = aulista;

    entradaDados.question('insira seu sexo (F ou M): ', function (sexoAulista) {
        let sexoAluno = sexoAulista;
        let feminino;
        let masculino;

        entradaDados.question('Nome do(a) Professor(a): ', function (docente) {
            let professor = docente;

            entradaDados.question('insira seu sexo (F ou M): ', function (sexoDocente) {
                let sexoProfessor = sexoDocente;

                entradaDados.question('Curso matriculado: ', function (cursoAluno) {
                    let curso = cursoAluno;

                    entradaDados.question('Disciplina do curso: ', function (disciplinaCurso) {
                        let disciplina = disciplinaCurso;

                        entradaDados.question('Vamos para a conversão de média. \nInsira a primeira nota: \n', function (valor01) {
                            let nota1 = Number(valor01);

                            entradaDados.question('Insira a segunda nota: \n', function (valor02) {
                                let nota2 = Number(valor02);

                                entradaDados.question('Insira a terceira nota: \n', function (valor03) {
                                    let nota3 = Number(valor03);

                                    entradaDados.question('Insira a quarta nota: \n', function (valor04) {
                                        let nota4 = Number(valor04);

                                        let media;
                                        //tratamento para entrada vazia
                                        if (professor == ''
                                            || aluno == ''
                                            || sexoAluno == ''
                                            || sexoDocente == ''
                                            || disciplina == ''
                                            || curso == ''
                                            || nota1 == ''
                                            || nota2 == ''
                                            || nota3 == ''
                                            || nota4 == '') {
                                            console.log('ERRO: alguma lacuna não está preechida, tente novamente.')
                                        }//tratamento para o limite do número das notas  
                                        else if (
                                            nota1 > 100
                                            || nota2 > 100
                                            || nota3 > 100
                                            || nota4 > 100
                                            || nota1 < 0 
                                            || nota2 < 0 
                                            || nota3 < 0
                                            || nota4 < 0) {
                                            console.log('ERRO: As notas são de 0 a 100. Preencha as lacunas de notas corretamente, por favor.')
                                        } else if (
                                            isNaN(nota1)
                                            || isNaN(nota2)
                                            || isNaN(nota3)
                                            || isNaN(nota4)) {
                                            console.log('ERRO: Insira somente números na Lacuna de notas.')
                                        } else if (!isNaN(aluno) 
                                        || !isNaN(professor)
                                        || !isNaN(sexoProfessor)
                                        || !isNaN(sexoAluno)
                                        || !isNaN(curso)
                                        || !isNaN(disciplina)){
                                        console.log('ERRO: Insira somente letras nas Lacunas acima das notas.')
                                    } else {
                                       media = mediaCalc.calcularMedia(valor01, valor02, valor03, valor04)
                                       console.log(media)

                                       
                                    }

                                });

                            });
                        });
                    });
                });
            });

        });
    });

});



});
