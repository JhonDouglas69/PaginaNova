//comparações
//Operadores 
//== comparação implicita, só o valor

const mero = 5
const tex = '5'
console.log(mero == tex);
console.log(mero === tex); // não faz a conversão 

//sabendo tipos de dados
console.log(typeof mero)
console.log(typeof tex);
/*Operadores Relacionais
    == ou ===   igual
        !=      diferente
        >       maior
        <       menor
        >=      maior ou igual
        <=      menor ou igual
*/
//conversão Explicita
//Number()
console.log(Number(tex));
//String()
let conv = string(numero);
console.log(typeof conv);

/*Operadores Logicos
    &&: operador 'e'- retorna true somente se todas as condições forem verdadeiras  
    ||: operadores 'ou' retorna true quando pelo menos uma condição for verdadeira
    != e !== 
*/ 
const A = 9;
const b = '9';
console.log(A != b);// tenta fazer a convensao
console.log(A !== b);// separa valor e tipo