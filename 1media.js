const arraVazia = [];

console.log(arraVazia);
/*const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1+nota2+nota3+nota4)/4;
*/
//indice notas:0, 1 , 2 , 3
const notas = [10,10];

//const media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length;  //lenght = tamanho


const sum = (arg) => arg.reduce ((acc , curr) => acc + curr, 0 );
const media = sum(notas) / notas.length
console.log(media);

/*ARRAY 
    um Array pode ser definido como lista ordenada e enum*/