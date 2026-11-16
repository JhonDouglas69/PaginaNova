const prompt = require ('prompt-sync') ();
const v1 = prompt ("Digite o primeiro valor:");
const v2 = prompt("Digite o segundo valor:");

const operacao = (v1, v2) => {
    if (v1 > 10){
        return Math.pow(v1, 2) + Math.pow(v2, 3)
    }else{
        return v1 * v2;
    }
}

console.log('A resultado dessa operaçao é ${operacao}')
