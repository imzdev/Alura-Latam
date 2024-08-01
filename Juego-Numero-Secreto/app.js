//Creamos una variable numero secreto
let numeroSecreto = 0;
//Creamos una varible para intento
let intentos = 0;
//Lista de numero sorteados
let listaNumeroSorteados = [];
//Maximo de numero
let numeroMaximo = 10;

//Funcion para asignar texto a las etiquietas h1, p
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    //agregamos un texto
    elementoHtml.innerHTML = texto;
    return;
}

//Funcion para verificar los intentos del usuario
function verificarIntento(){
    //obtenemos elementos por id 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        //Si el numero del usuario es igual al numero secreto, operador ternario if=? , else= :
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //Buscamo el id del elemento y si el usuario acerta se remueve el atributo disabled
        document.getElementById('reiniciar').removeAttribute('disabled');
        //Cuando acertamos forzamos que el usuario inicie un nuevo juego
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }else{
        //El usuario no acerto
       if (numeroDeUsuario > numeroSecreto){
        //Si el numero del usuario es mayor al numero secreto
        asignarTextoElemento('p', 'El numero secreto es menor');
       }else{
        //Si el numeroDeUsuario es menor al numeroSecreto
        asignarTextoElemento('p', 'El numero secreto es mayor');
       }
    }
    intentos++;
    limpiarIntento();
}

//Limpiamos la caja donde vamos ingresando los numeros
function limpiarIntento(){
    //Selector generico por id con #
    document.querySelector('#valorUsuario').value = '';
}

//Funcion para generar un numero secreto de forma aleatoria
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Vamos a crear un console log para ver el numero generado 
    console.log(numeroGenerado)
    //como va creciendo la lista
    console.log(listaNumeroSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles, refresca la pagina');

    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            //Almacenamos el numero generaro en el arreglo y lo retornamos
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

//Funcion para añadir los mensajes iniciales en la pantalla principal del juego
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
     //Asignar un numero secreto nuevo
     numeroSecreto = generarNumeroSecreto();
     //Inicializar el numero de intentos
     intentos = 1;
     document.getElementById('intentar').removeAttribute('disabled');

}

//Funcion para reiniciar el juego al presionar el boton "NUEVO JUEGO"
function reiniciarJuego(){
    //Limpiamos la caja
    limpiarIntento();
    //Indicar mensaje de intervalos de numeros
    //Asignar un numero secreto nuevo
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabiliar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

//Segmento para Llamar a las funciones 
condicionesIniciales();