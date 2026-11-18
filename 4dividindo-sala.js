const alunos = ['João','juliana','ana','caio','lara','marjorie','guilherme','aline','fabiana','andre','carlos',
    'paulo','bia','vivian','isabela','vinicios','renan','renata','daisy','camilo'
];

console.log(alunos.length);//verificar o tamanho
const sala1 = alunos.slice(0,10);//divide o Array criando uma copia, não altera o original
console.log(sala1);

const sala2 = alunos.slice(10);//verificar o tamanho
console.log(sala2);//divide o Array criando uma copia, não altera o original

const grupos =5;
const sala3 = alunos.slice(alunos.length / grupos);
console.log(sala3);