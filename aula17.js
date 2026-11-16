/*npm install prompt-sync*/

//para interromper a execução do coderunner : Ctrl + ALT + M
//para rodar no terminal : node nomedoArquivo.js;

//const prompt = require('prompt-sync')();
//const nome = prompt('Informe seu nome: ');
//console.log(`Seja bem-vindo ${nome}`);

const prompt = require('prompt-sync')();

// Pedindo os três números e convertendo para número
const num1 = (prompt('Digite o primeiro número: '));
const num2 = (prompt('Digite o segundo número: '));
const num3 = (prompt('Digite o terceiro número: '));

// Realizando a soma
const soma = num1 + num2 + num3;

// Mostrando o resultado na tela usando crases
console.log(`A soma de  ${num1} e  ${num2} e  ${num3} é: ${soma}`);
