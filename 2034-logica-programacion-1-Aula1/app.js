// variables
    /* Agregar la libreria MATH.floor 
    para eliminar los numeros decimales y 
    MATH.random para agregar un numero aleatorio
    */
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;

//inicializamos la variable en 0
let numeroUsuario = 0;
//implementamos numeros de intentos, inicializamos en 1
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;
//verificamos en la consola el numero aleatorio que nos asignara la libreria math
//console.log(numeroSecreto);

//condicion mientras si es diferente ! =
while (numeroUsuario != numeroSecreto){
    //convertimos en entenor el numero asignado por el usuario con el parseInt
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    // La variable captura en el prompt se muestra en consola del navegador
    //para saber el tipo de dato utilizamos parametro typeof
    console.log(typeof(numeroUsuario));

    /*
    Realizamos la comparación
    */
    if (numeroUsuario == numeroSecreto){
        //la condicion fue verdadera (numero secreto = 6)
        alert(`Acertaste, el numero es: ${numeroUsuario}&& luego ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        //                                referencia a condicion en codigo js con        if =? y : =else
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        intentos++;
        //palabraVeces = 'veces';
        //Agregasmos una condicion para controlar el numero de intentos
        if(intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
            //agregamos el break para finalizar el proceso
            break;
        }
        //la condicion (numero secretro) no coincidio
        //alert('Lo siento, no acertaste al numero');
    }
}