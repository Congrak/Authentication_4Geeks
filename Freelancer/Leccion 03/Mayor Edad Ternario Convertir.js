let numero = ' 21 ';

let edad = Number(numero);

if (isNaN(edad)) {
    console.log('No es un numero')
}
else {
   resultado= edad >= 21 ? ' Es mayor de Edad' : ' Es menor de Edad';
console.log(resultado);

}