/* Você deve criar um array, usando as funções específicas do array, que contenha apenas carros da ford e que cada item deste novo array contenha apenas o nome e o valor dos carros. Além disso, só pode ter uma linha em cada função do array que você utilizar. */

const carros = [
  {
    nome: "escort xr3",
    valor: 10000,
    marca: "Ford",
  },
  {
    nome: "Chevette",
    valor: 8000,
    marca: "Chevrolet",
  },
  {
    nome: "Landau",
    valor: 14000,
    marca: "Ford",
  },
  {
    nome: "maverick",
    valor: 18000,
    marca: "Ford",
  },
];


let carrosdaFord = carros.filter(carros=>carros.marca=='Ford').map(carros=>[carros.nome,carros.valor]);

console.log(carrosdaFord);  