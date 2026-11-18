/*Desenvolva um programa em JavaScript que:
  v  1.Crie um Array com as notas [7,8.5,6,9]
  v  2.Adicione a nota 10 no final do Array
  v 3.Remova a ultima nota do Array
    4.Calcule a media das notas restantes
    5.Exibe as notas e a media com duas casas decimais


const notas = [7,8.5,6,9];
console.log(notas);

notas.push(10);
console.log(notas);

notas.pop();
console.log(notas);

const sum = notas.reduce(
    (acumulador, nota) => acumulador + nota, 0
);
const media = sum / notas.length;

console.log(`notas do aluno: ${notas}`);
console.log(`media final; ${media.toFixed(2)}`);
*/




/*
uma loja possui duas listas de codigos de produtos. o responsavel
 precisa unir as listas, identificar os codigos pares e localizar um produto especifico 

 desenvolva um programa em javaScrip que:
 1. crie os array produtosA = [101, 202, 303, 404].
e produtosB = [505, 606, 707, 808]
2.Uma os dois arrays em um novo array utilizando concat().
3.Crie um novo array contendo apenas os codigos pares utilizando filtro().
4.Encontre o primeiro codigo par utilizando find
5.Encontre a posiçao do codigo 606 no array completo utilizando findIndex().
6.Exiba os resultados no console.
*/
const produtosA = [101, 202, 303, 404];
const produtoB = [505, 606, 707, 808];
const produtos = produtosA.concat(produtoB);
const prodPares = produtos.filter(codigo => codigo % 2 === 0); /*Somente Pares*/
const primeiroPar = produtos.find(codigo => codigo % 2 === 0); /*Primeiro Par */
const indice = produtos.findIndex(codigo => codigo === 606);

console.log(`Juntando os numero é ${produtos}`);
console.log(`Todos os pares são ${prodPares}`);
console.log(`O primeiro par é ${primeiroPar}`);
console.log(`O indice é ${indice}`);


/*Desenvolva um programa que:
1.Crie um novo array contendo somente as notas maiores ou
iguais a 7, utilizando filter(.).

2.Utilize findLastIndex() para encontrar a última posição de 
uma nota maior ou igual a 8 no array original.

3.Utilize forEach() para exibir o quadrado de cada nota.

4.Exiba o array original, as notas selecionadas e a posição 
encontrada.

5.Ao final, exiba o resultado retornado por forEach(). 
*/

const notas = [5,8,6,9,7,8];
const notasMaiores = notas.filter(codigo => codigo >= 7);

const ultimoIndece = notas.findIndex(
  nota => nota >= 8
);

console.log('quadrado de cada nota:');
const quad = notas.forEach(notas => {
  console.log(math.pow(notas, 2))
});