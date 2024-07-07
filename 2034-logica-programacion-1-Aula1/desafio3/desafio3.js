/* 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
Muestra cada número.
    let contador = 1;
    while(contador <=10 ) {
        console.log(contador);
        contador++;
    }
    */

/* 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. 
Muestra cada número.
    let contador = 10;
    while(contador >=0){
        console.log(contador);
        contador--;
    }*/

/* 3. Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
    let numeroMaximo = prompt("Ingrese un numero para la cuenta regresiva:");
    //numeromaximo = 20
    // contador = 0
    /*
     Condicion while:
    Entonces cuando contador sea menor que 20 (0 <o= a 20)
    contador=valor y va aumentar 1 hasta que sea = 20, finalizara el bucle.
    */
    let contador = 0;

    while(contador <= numeroMaximo){
        console.log(contador);
        contador++;
    }
    
