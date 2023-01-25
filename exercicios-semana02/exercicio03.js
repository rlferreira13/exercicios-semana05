let valor1 = parseInt(window.prompt("Informe um valor:"));
let valor2 = parseInt(window.prompt("Informe outro valor:"));

function somaValores(valor1, valor2) {
  return valor1 + valor2;
}

document.write(
  `<h2>O valor da soma dos numeros informados é de:${somaValores(valor1, valor2)} .<h2>`
);
