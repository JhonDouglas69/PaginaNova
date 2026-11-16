/*
let x = '';
console.log(x);
x = 'oi';
*/
// 1- Declaração da função
//função nome_da_função (parâmetros de entrada)
function imprimeirotexto (texto){
    console.log(texto);
}   

//2 - Execução da função
imprimeirotexto ('zvideos');

//função soma
function soma (){
    console.log(2+2);
}

soma ();

function somaFixa  (num1,num2){
    console.log(num1 + num2);
}

somaFixa (3,4);

/*function somaDoisNumeros (num1,num2){
    //console.log(num1+num2);
    imprimeirotexto(num1+num2);
}

somaDoisNumeros (6, 7);
*/
//criar uma função calcular que rebeca 3 
//parametros: 2 valores e a operação (+,-,*,/)

function somaTresnumeros (num1,num2,op){
    
    if (op =='+'){
        imprimeirotexto(num1+num2);
    }
    if (op =='-'){
        imprimeirotexto(num1-num2);
    }  
     if (op =='*'){
        imprimeirotexto(num1*num2);
    }
     if (op =='/'){
        imprimeirotexto(num1/num2);
    }
//console.log(imprimeirotexto); 
imprimirtexto(imprimeirotexto);//chama a funçao para exibir o resultado

somaTresnumeros(12,2,'*');

}


/*-------------------------*/

function idade(dia,mes,ano){
    return 2026 - ano;

}

//imprimeirotextoidade(idade(27,10,1984,));
resultado = (idade,27,10,1984);

//carteira = -18;
carteira = idade (27,10,1984) -18;

console.log('tem cnh há '+carteira+'anos');

/* OUTRAS FUNÇÔES
math.round(): Arrendadondamento de um numero de ponto 
flutuante para inteiro mais proximo.
math.ceil(): Faz o arredondamento para o valor mais alto
    ex: Math.ceil(5.2)retorna 6
math.floor(): Faz o arredondamento para o valor mais baixo
    ex: math.floor(5.2)retorna 5
math.trunc(): Desconsidera os números decimais, o que retorna 
    math.trunc(4.8) retorna 4
math.pow(): Faz a exponenciação(4, retorna 4^2 = 16
    math.sqrt(64) retorna 8
math.min(): retornaomenor valor entre os   
    */

