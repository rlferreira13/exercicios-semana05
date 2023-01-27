/*Com a ajuda da estrutura condicional crie um código que irá capturar o peso do usuário, após isso calcule o IMC tomando a base o cálculo IMC = Peso ÷ (Altura × Altura).
/*Caso o valor digitado seja maior ou igual a 25 apresente em um alert a mensagem, “Você está acima do peso, procure um médico”, caso seja entre 18,5 e 24,9 imprimir em tela,
/* na própria página html a mensagem "PARABÉNS!! Você está no peso ideal” e caso não seja nenhuma das condições acima, imprima também em tela “Você está abaixo do peso, procure um médico.”*/

let peso = parseInt(window.prompt("Informe seu peso:"));
let altura = parseFloat(window.prompt("Informe sua altura em metros separado por ponto.(Exemplo: 1.90):"));
let imc;

function calculadoradeImc(peso,altura){
    imc = peso / (altura**2);
}
calculadoradeImc(peso,altura)
if (imc >= 25){
    window.alert(`Seu IMC é de ${imc.toFixed(2)}, você está acima do peso, procure um médico.`)
} 
else if ( imc <=24.9 &&  imc >= 18.5){
    window.alert(`Seu IMC é de ${imc}, PARABÉNS! Você está no peso ideal.`)
} 
else if (imc > 0 && imc < 18.5){
    window.alert(`Seu IMC é de ${imc}, você está abaixo do peso, procure um médico.`)
}