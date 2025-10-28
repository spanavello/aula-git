// Fazer um sistema que peça ao usuario 2 valores
// e peça qual operação ele deseja realizar
// porem o sistema so deve parar se o usuario
// digitar uma operação errada.

const { somar, subtrair, multiplicar, dividir } = require('./ex61');

var prompt = require('prompt-sync')();

const n1 = +prompt("Digite um valor: ")
const n2 = +prompt("Digite outro valor: ")
let operacao
while(true){
    operacao = prompt("Escolha uma operação + - / *: ")
    if(operacao == "+"){
        console.log(somar(n1,n2));
        continue
    }else if(operacao == "-"){
        console.log(subtrair(n1,n2));
        continue
    }else if(operacao == "*"){
        console.log(multiplicar(n1,n2));
        continue
    }else if(operacao == "/"){
        console.log(dividir(n1,n2));
        continue
    }else{
        console.log("Operação Incorreta");
        break
    }
}

// quando clicar ctrl + espaço antes das operaçoes somar dividir... 
// ele encontra a pasta ex61 e exporta as funcões, 
// sendo possivel escrever em uma pasta a parte e deixando o codigo mais curto e limpo