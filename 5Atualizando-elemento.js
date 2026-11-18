/*Nossa sala de aula teve alguns modificações 

Alunos:
João
Ana
Caio
Lara
Marjorie
leo

porém, Ana e Caio mudaram de escola e o fulano entrou na sala.
Nosso desafio é atualizar a lista de chamada removendo os nomes dos alunos que sairam e adicionar o novo aluno
*/
const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'leo'];
console.log(`lista de alunos original: ${alunos}`);
//alunos.splice(1,2);
//console.log(`lista de alunos Após remoção: ${alunos}`);
alunos.splice(1,2,'Fulano');
console.log(`lista de alunos Após remoção/Inserção : ${alunos}`);
/*O primeiro parametrô do metodo splice() é o índice do elemento que queremos remover
O segundo parametro é a quantidade de itens que queremos remover apartir do índice
Quando passar o terceiro paremetro, removemos os primeiros e adiciona
novo elemento na posição*/