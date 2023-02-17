/* No seu programa de calculadora (veja exercício 5), a equipe está novamente insatisfeita com a forma como as coisas estão estruturadas. Eles adicionaram o módulo:

subtracao.js

‌function subtracao(a, b) {
  console.log("Resultado da subtração:", a - b);
}

export default subtracao;
Eles agora gostariam de poder usar destas formas:

Forma 1, sem instanciar a classe:

main.js

‌import calculadora from "./calculadora.js"

calculadora.somar(2, 2)
calculadora.subtrair(2, 2)
Forma 2, podendo importar somente uma das operações:

main.js

import { somar } from "./calculadora.js"

somar(2, 2)
Cabe a você refatorar o código para que o módulo calculadora permita o que a equipe deseja. */

import calculadora from './calculadora.js'
import {soma} from'./calculadora.js';
import {subtracao} from './calculadora.js';

soma(2, 2);
subtracao(2,2);

calculadora.soma(2,2);
calculadora.subtracao(2,2);