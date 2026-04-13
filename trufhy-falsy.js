//boolean
const usuarioDrogado = true;
const drogaPaga = false;

//0 = false 
//1 = true

console.log(0 == false);//true
console.log(""== false); //true
console.log(1 == true); //true

//null - tipo de dados que representa o vazio;
//underfined - var declado
 
var teste; //underfined
let varNull = null;

console.log(teste);
console.log(varNull);

console.log(typeof teste);
console.log(typeof varNull);// aparece como objeto por ser um bug de js, deveria,na verdade, ser null

console.log(typeof drogaPaga);
