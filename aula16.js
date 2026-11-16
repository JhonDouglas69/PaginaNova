//Arrow funcion - Flecha ( -> )

//1° forma - declaração
//2° forma - expressão da função - anônima
//3° forma - Arrow

//Arrow veio junto ES6 (ECMAScrip 2015)
//nomeada 

const apresentarArrow = nome =>`Meu nome é ${nome}`;

//console.log (apresentarArrow('Rodridroid'))

//const soma = (num1, num2) =>`Resultado é ${num1 + num2}`;
const soma = (num3, num4) => num3 + num4;

console.log (soma(4,5));

//let num1 = 10
//const verificar = num1 > 10 ?"menor ou igual a 10": "maior que 10";
//console.log (verificar);

const verificar = num1 => {
    if (num1 > 10){
        return ("igual a 10")
    }else{
        return("menor")
        }
    
}


const multi = (multnum1 , multnum2) => {
    if (multnum1 > 0 & multnum2 > 0 & multnum1 < 10 & multnum2 < 10){
        return (multnum1 * multnum2)
    }else{
        return("pode não so de 1 a 9")
        }
    
}
console.log(multi(9,0));
const login = (user, senha) =>{ 
    if (user == 'admin' & user == '049.730.789-80') & senha == '123'{
     login
    }
}



































//pssssssssssssssssssssssssssssssss silencio