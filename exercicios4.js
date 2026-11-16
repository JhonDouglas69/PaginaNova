//a nota final de um estudante é calculada a apartir de três notas atribuidas entre o intervalo 
//de 0 até 10, respectivamente, a um exame final. A media das 3 notas mencionadas anteriormente
//obedece aos pesos: trabalho de laboratorio: 2; avaliação

const prompt = require('prompt-sync')();

function lerNota(mensagem) {
    let nota;
    do { // faça
        let entrada = prompt(mensagem);
        // substitui a , por um . caso exista (ex: 7,5 passa a ser 7.5)
        entrada = entrada.replace(',', '.');
        nota = parseFloat(entrada);
        
        if (isNaN(nota) || nota < 0 || nota > 10) {   
            console.log('Valor inválido! Digite uma nota entre 0 e 10.');
        }
        
    } while (isNaN(nota) || nota < 0 || nota > 10); // CORRIGIDO: era 'inNaN'

    return nota;
}
const lab = lerNota('digite a nota do trabalho de (0 a 10):');
const semestral = lerNota ('Digite a nota da avaliaçao semetral (0 a 10):');
const exameFinal = lerNota ('Digite a nota do exame final (0 a 10):');

//pesos lab =2, semestral=3 e exame final =5 (total dos pesos = 10)

const pesoLab = 2; 
const pesoSemen = 3; 
const pesoFinal = 5;
const somaPesos = pesoLab + pesoSemen + pesoFinal;

const mediaPonderada = (
    (lab * pesoLab) + 
    (semestral * pesoSemen) +
    (exameFinal * pesoFinal) //
)

console.log (`\nMedia filnal calculada;${mediaPonderada.toFixed(1)}`);

//Verificação da situação do aluno 
if (mediaPonderada >= 0 && mediaPonderada <= 2.9){
    console.log ('situação: REPROVADO');
} else if (mediaPonderada >=3 && mediaPonderada <= 4.9){
    console.log ('situação: RECUPERAÇÃO')
} else {
    console.log ('situação: APROVADO')

}