/************************************************************************************************
 * Objetivo: Calcular a média de quatro notas escolares
 * Autor: Daniela Lino
 * Data: 27/01/2023
 * Versão: 1.0.
 ************************************************************************************************/

//Import da biblioteca readline

 const readline = require('readline');

//Cria um objeto para ser especialista em entrada de dados pelo teclado
 var entradaDados = readline.createInterface({
        input : process.stdin, 
        output : process.stdout

 })

 /**
  * Criação de variáveis
  * var - cria um espaço em memória de escopo global para o projeto, podendo ser chamada em qualquer parte do código, podendo ser mudada em várias funções dentro do arquivo.
  * 
  * let - cria um espaço em memória de escopo local, podendo ser usada somente dentro da função que foi criada.
  * 
  * const - cria um espao em memória de escopo local ou global para o projeto, ou seja, essa constante poderá ser utilizado em qualquer parte do projeto sem que possa sofrer alteração.
  */
 
//Função de CallBack para entrar o nome do aluno
 entradaDados.question('Digite seu nome: \n', function(nome){
     //Recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Funçaõ de CallBack para nota1
    entradaDados.question('digite a nota1: \n', function(nota1){
        let valor1 = nota1;

        //Funçaõ de CallBack para nota2
        entradaDados.question('Digite a nota2: \n', function(nota2){
            let valor2 = nota2;

            //Funçaõ de CallBack para nota3
            entradaDados.question('digite a nota3: \n', function(nota3){
                let valor3 = nota3;

                //Funçaõ de CallBack para nota4
                entradaDados.question('digite a nota4: \n', function(nota4){
                    let valor4 = nota4;

                    let media;

                    /**
                     * Conversão de Tipos de Dados
                     *      
                     *      ParseInt() ou Number.parseInt - Converte uma String em inteiro
                     *      ParseFloat() ou Number.parseFloat - Converte uma string em real
                     * 
                     * Operadores de comparação 
                     * == (verifica a igualdade de valores entre os conteúdos)
                     * === (verifica a igualdade entre valores e dados entre conteúdos)
                     * != (verifica a diferença de valores entre conteúdos)
                     * !== (verifica a diferença de valores ou conteúdos e a igualdade de dados entre conteúdos)
                     * ==! (verifica a igualdade de valores ou conteúdos e a diferença de dados entre conteúdos)
                     * < (maior que)
                     * > (menor que)
                     * <= (maior ou igual a)
                     * >= (menor ou igual a)
                     * 
                     * Operadores Lógicos 
                     * 
                     *  E && AND
                     *  OU || OR
                     *  NEGAÇÃO ! NOT
                     *  
                     * 
                     */

                     //Validação para entrada vazia
                    if(nomeAluno == ''){
                        console.log('Insira o nome, por favor.')
                        
                    }else if( valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                        console.log('ERRO: Você deixou de inserir algum valor.')
                    } //Validação para entrada de texto(inválida)
                    else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        console.log('ERRO: Só preencha as lacunas com números, por favor.')
                    } else if (valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
                        console.log('ERRO: Insira somente números de 0 a 10, por favor.')
                    } else{
                        media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4))/4;


                        if(media < 5){
                            console.log(`Média: ${media.toFixed(1)} \nSTATUS: Reprovado.`)
                        }
                        else if(media >= 5){
                            console.log(`Média: ${media.toFixed(1)} \nSTATUS: Aprovado.`)
                        }
                    }

                    
               
                })
            })
        })
    });
 });