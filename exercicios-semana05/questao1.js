/* As arrow functions, ou funções de seta, são formas simplificadas de declarar uma função e também não possuem um contexto “this” próprio.

Este tipo de função deixa o código mais enxuto e com isso em mente escreva uma função soma utilizando arrow functions que some dois elementos e imprima resultado em apenas uma linha. */

const somarDoisValores = (valor1,valor2) => console.log(valor1+valor2);

/*Testando a função */
somarDoisValores(1,4);