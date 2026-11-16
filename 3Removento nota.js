//const notas = [10, 6, 8,5.5,10];
//console.log(notas)

//Remover elemento = pop
//notas.pop();
//sempre remove o último elemento
//console.log(notas)

/*METODO ARRAY
    Um metodo é uma função que serve como uma propiedade do Array ou de um objeto.
    Ele pode realizar tarefas pré-definidas usando os dados do Arrayn e dos parâmetros que passamos para eles,
    como adicionar,remover ou até encontrar elementos.

- concat - concatenar 
    Junta dois Array, colocando o Array como argumento, logo depois do primeiro. 
    
    */
const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b);
console.log(`Concat ${c}`);

/*Filter()
    Retorna a uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita pelo usuario.
    Não altera o Array onde foi chamado, então precisam salvar esse resultado em um novo Array.

*/

const d = c.filter(item => item % 2 === 0); /*Somente Pares */
console.log(`Filter ${d}`);

/*Find()
    Funciona de forma parecida com o Filter ,
    porem retorna o primeiro valor que satisfazer o teste podendo ser uma string ou numero.
*/

const e = c.find(item => item % 2 === 0); /*Somente Pares */
console.log(`Find ${e}`);

/* FindIndex{}
    Funciona igual ao find (), mas retrna o indice em vez do elemento possivibilitando,
    usa-los em outras partes do codigo.
*/

const f = d.findIndex(item => item % 2 === 0);
console.log(`FindIndex ${f}`);

/*LastIndexOF()
    É igual a o find(), mas retorna o índice em vez do elemento 
    possibilitando usá-lo em outras partes do codigo
*/

const g = d.findLastIndex(item => item % 2 === 0);
/*cons g = d.lastIndexOf(6); */
console.log(`LastIndexOF ${g}`);

/* - ForEach()
    Executa uma função em cada elemento do array de forma individual .
    Não altera o Array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhido  

    */

console.log(`ForEach`);
const h = d.forEach(item => {
    console.log(item * item);
});
console.log(`ForEach${h}`)

/*pop remove o ultimo elemento*/

/* - Shift()
Retira o primeiro elemento.
Altera o arry original removendo o elementoe troca o indice 
de todos os elementos para um a menosdo que era.
*/
const y = [1, 2, 3];
const j = y.shift();
console.log(`SHIFT:removeu ${j} ficou assim ${y}`);


/* -push() adiciona elemento ao final do Array*/

/*-unshift()
    parecido com o push(), porém adiciona na primeira posição
    trocará o índice de todos elementos.
    Altera o Array original.

*/

const x = [1, 2, 3];
const l = x.unshift();
console.log(`SHIFT:removeu ${l} ficou assim ${x}`);

/* -reduce()
Utiliza uma função definida pelo usuario em cada um dos elementos,
guardando o resultado um uma variavel que pode ser acessada dentro 
Retorna um unico valor final.
*/
const numeros = [10,20,30,40];
const multiplica = numeros.reduce(
    (total, atual) => total * atual, 0
);
console.log('REDUCE: ${multiplica}'); //saida 240.000



/* - reverse()
    inverta a ordem dos elementos do arry, entao o primeiro vira o ultimo, o segundo o penuntimo, e assim por diante 
*/
const original = [1, 2, 3];
const reversed = original.toReversed();

console.log(`Original ${original} e invertido ${reversed}`);

/* 
    slice()
    copia uma parte do arry para outro arry.fatiamento do arry
*/

const frutas = ['maçã','uva','MAnga','laranja','abacaxi'];
const algumasFrutas = frutas.slice(1,4);
// slice (indice inicial, indice final -1);
console.log(`Slice: ${algumasFrutas}`);

/* 
    -sort()
    organiza o arry de acordo com a classificaçao unicode, onde os numeros
    vem antes das letras, porem nao funciona corretamente para numeros, 
    onde temos que definir uma funçao que ira criar o camando
*/

const fruits = ['maçã','uva','MAnga','laranja','abacaxi'];
console.log(fruits.sort());

const number = ['10','5','100','2','25'];
console.log(number.sort());

//ascending - Crecent
number.sort((a, b) => a - b );
console.log(number)

//ascending = Decrescente
number.sort((a, b) => b - a );
console.log(number)

/* - splice()
    Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro seja maior que 0,
    e incluir um ou mais elemento a partir de um indice escolhido.
*/

console.log(`Frutas Original: ${frutas}`);
const removed = frutas.splice(1,2);
console.log(`Fruta após remoção: ${frutas}`);
console.log(`Fruta removida: ${removed}`);




