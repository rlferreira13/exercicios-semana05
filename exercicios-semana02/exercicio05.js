let valor = parseInt(window.prompt("Informe um valor:"));

if(valor%2==0){
    document.write(`O valor ${valor} é um número par.`)
}
else if(!valor%2==0){
    document.write(`O valor ${valor} é um número ímpar.`)
}
else{
    document.write(`O valor informado não é um número.`)
}