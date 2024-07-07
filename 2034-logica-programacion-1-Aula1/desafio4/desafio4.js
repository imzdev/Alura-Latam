// Desafíos finales:

/* 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
    let mensaje = 'Bienvenidos';
    console.log(mensaje);
    // o tambien 
    console.log('Bievenidos');*/

/* 2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje 
"¡Hola, [tu nombre]!" en la consola del navegador.
    let nombre = 'Agustin';
    console.log(`Hola ${nombre}`);*/

/* 3. Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

    let nombre = 'Agustin';
    alert(`Hola ${nombre}`);*/

/* 4. Utiliza prompt y haz la siguiente pregunta: 
¿Cuál es el lenguaje de programación que más te gusta?.
 Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

    let quiz = prompt("Cual es el lenguaje que mas te gusta?");
    console.log(quiz);*/

/* 5. Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

    let valor1 = 6;
    let valor2 = 9;
    resultado = (valor1+valor2);
    console.log(`La suma de ${valor1} + ${valor2} = a ${resultado}`);
    */

/* 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

    let valor1 = 9;
    valor2 = 6;
    let resultado =  valor1-valor2;
    console.log(`La resta de ${valor1} y ${valor2} = a ${resultado}`);*/

/* 7. Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

    edad = prompt('Ingrese una edad');
    if(edad <18 ){
    console.log('Es menor de edad');
    }else{
    console.log('Es mayor de edad');
    }*/

/* 8. Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, negativo o cero utilizando 
un if-else y muestra el mensaje correspondiente.

    let numero = parseInt(prompt('Ingrese numero'));
    if(numero>0){
        alert('numero positivo');
    }else if(numero < 0){
        alert('numero negativo');
    }else{
        alert('estas utilizando 0');
    }*/

/* 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
    let numero = 1;
    while(numero<=10){
    console.log(numero);
    numero++;
    }*/
    

/* 10. Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
    let nota = 5;
    if(nota >= 7){
        console.log('Aprobado');
    }else{
        console.log('Reprobado');
    }
    //mi version:
    let nota = prompt('Ingrese calificacion:');
    if(nota >= 7){
        console.log('Aprobado');
        alert(`tu nota es ${nota} y estas Aprobado`);
    }else{
        console.log('Reprobado');
        alert(`tu nota es ${nota} y estas Reprobado`);
    }*/

/* 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

    let numeroAleatorio = Math.random();
    console.log(numeroAleatorio); */

/* 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
    let numeroAleatorio = Math.floor(Math.random() * 10)+1;
    console.log(numeroAleatorio);*/

// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
    let numeroAleatorio = Math.floor(Math.random() * 1000)+1;
    console.log(numeroAleatorio);