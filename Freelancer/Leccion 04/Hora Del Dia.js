let hora = 12, mensaje;

if ( hora >= 0 && hora <=5){
    mensaje = ' Durmiendo';
}
else if ( hora >= 6 && hora <= 11){
    mensaje = 'Buenos Dias'
}
else if ( hora >= 12 && hora <= 18){
    mensaje = 'Buenos Tardes'
}
else if ( hora >= 19 && hora <= 24){
    mensaje = 'Buenos Noches'
}
else {
    mensaje = ' Error, Inserte una hora valida'
}
console.log(mensaje);
