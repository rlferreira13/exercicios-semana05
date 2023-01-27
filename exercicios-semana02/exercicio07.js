//Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, será apenas aceita três tipos de avaliação: ruim, bom e excelente. Depois verifique quantas pessoas classificaram a série como ruim.

let resposta;
let respostasRuins = 0;
let i = 0;

while (i < 4) {
  resposta = window.prompt("Qual sua nota para a série Stranger Things (ruim, bom ou excelente)?");
  if(resposta =="ruim"){
    respostasRuins++;
  }
  i++;
}
document.write(`Foram dadas ${respostasRuins} avaliações ruins.`);
