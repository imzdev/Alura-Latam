//Desafíos:

/* 1. Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/
   /* let dia = prompt("Que dia es:");

    if(dia === 'sabado' | dia === 'domingo' ){
    alert('Buen fin de semana');
    }else{
    alert('Buena semana')
    }
   */

/* 2. Verifica si un número ingresado por el usuario es positivo o negativo.
 Muestra una alerta informativa.
*/
    /* let numero = prompt("Ingrese un numero positivo o negativo:");
    if(numero > 0) {
        alert('Es un numero positivo');
    } else if ( numero < 0) {
        alert('Es negativo');
    }else{
        alert('Es cero');
    }
    */

/* 3. Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/
    /*
    let puntuacion = prompt("Indica tu puntuacion:");
    if(puntuacion >= 100) {
        alert('¡Felicidades, has ganado!');
    } else {
        alert('Intentalo nuevamente para ganar')
    }
    */

/* 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
 utilizando un template string para incluir el valor del saldo.
 */
    /*
    let saldo = 4000;
    console.log(saldo)
    alert(`su saldo actualmente es: ${saldo}`);
    */

/* 5. Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.
*/
    let nombre = prompt("Ingre su nombre:");
    console.log(nombre);
    alert(`Bienvenido ${nombre}`);