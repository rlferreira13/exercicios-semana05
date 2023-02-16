/*Você recebeu o seguinte programa:

index.html

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Calculadora</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script src="soma.js"></script>
  <script src="Calculadora.js"></script>
  <script src="main.js"></script>
</body>

</html>
main.js

const calculadora = new Calculadora();
calculadora.somar(2, 2)
Calculadora.js

class Calculadora {
  somar(a, b) {
    soma(a, b)
  }
}
soma.js

function soma(a, b) {
  console.log('O resultado é:', a + b);
}
Os desenvolvedores estão reclamando que se você fizer os imports dos javascripts em ordem diferente , como por exemplo:

<body>
    <script src="Calculadora.js"></script>
    <script src="main.js"></script>
    <script src="soma.js"></script>
</body>
O programa para de funcionar!

Você tem a tarefa de remover a necessidade de importar os scripts “Calculadora.js” e “soma.js” do arquivo index.html, importando apenas o main.js na página index.html. Refatore este código para utilizar módulos e deixe a sua equipe feliz! */

import calculadora from './calculadora.js'
import {soma} from'./calculadora.js';
import {subtracao} from './calculadora.js';

soma(2, 2);
subtracao(2,2);

calculadora.soma(2,2);
calculadora.subtracao(2,2);