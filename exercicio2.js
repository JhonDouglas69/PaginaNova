/*2-Crie um progama que slicite so usuario 2 valores. se o primeiro valor for menor que 10  faça o primeiro valor ao quadrado e 
posteroormente soma do cubo ao quadrado do segundo valor senão, a multiplicaçao dos dosi valores, apresentar o resultado da conta adequado*/

// Solicita os dois valores ao usuário (convertendo para número)
const prompt = require ('prompt-sync') ();
let valor1 = (prompt("Digite o primeiro valor:"));
let valor2 = (prompt("Digite o segundo valor:"));
let resultado;

// Verifica se o primeiro valor é menor que 10
if (valor1 < 10) {
    // Primeiro valor ao quadrado + cubo do segundo valor
    let quadradoValor1 = valor1 ** 2;
    let cuboValor2 = valor2 ** 3;
    resultado = quadradoValor1 + cuboValor2;            //math.pow 
        
    console.log(`O primeiro valor (${valor1}) é menor que 10.`);
    console.log(`O quadrado do primeiro é: ${quadradoValor1}`);
    console.log(`O cubo do segundo é: ${cuboValor2}`);
    console.log(`Resultado da soma: ${resultado}`);
} else {
    // Caso contrário, faz a multiplicação dos dois valores
    resultado = valor1 * valor2;
    
    console.log(`O primeiro valor (${valor1}) não é menor que 10.`);
    console.log(`Resultado da multiplicação: ${resultado}`);
} 

