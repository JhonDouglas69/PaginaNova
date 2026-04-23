//Conversões Tipos de dados
//Number = int ou float
//String = texto ou char
//Boolean = lógico

//Conversões implicitas
const numero = 456;
const numString = '456';
console.log(numero == numString);//converter um numero String e compara
// == conversoes implicitas

//Conversões esplícitas
//deve-se utilizar funçoes de conversoes para cada tipo
console.log(numero + numString); //concatenação
//EX:
//'J'+'h'+'o'+'n' = jhon
console.log(numero + Number(numString));//converçao esplicita
console.log(String(numero) + numString);//converçao esplicita

 const numString2 = '456a'; //erro de converçao 456a nao pode ser converdido para numero
 console.log(numero + Number(numString2));